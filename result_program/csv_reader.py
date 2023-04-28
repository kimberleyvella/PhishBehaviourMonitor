import csv
from datetime import datetime

# Load CSV file as a list of rows
with open('csv_files/events-15.csv', 'r') as file:
    reader = csv.reader(file)
    next(reader) # Skip the header row
    rows = [row for row in reader]

result = []

# Start logging when the 'type' is a click
i = 0
while i < len(rows):
    row = rows[i]
    email_event_count = 0
    email_start = ''
    email_stop = ''

    if row[1] == 'click':
        # Find first email id of type 'click'
        while i < len(rows):
            if rows[i][3] == row[3] and rows[i][1] == 'click':
                email_start = rows[i]
                break
            i += 1
        else:
            # No matching email id found, skip to the next row
            i += 1
            continue

        # Find target ('report phish button' or 'delete button') of type 'click'
        while i < len(rows):
            if rows[i][1] == 'click' and (rows[i][2] == 'Report Phish button' or rows[i][2] == 'Delete button'):
                email_stop = rows[i]
                break
            elif rows[i][1] == 'mousemove':
                email_event_count += 1
            i += 1
        else:
            # No matching target found, skip to the next row
            i += 1
            continue

        # Calculate time in, time out, and total time
        time_in = datetime.strptime(email_start[0], '%M:%S.%f')
        time_out = datetime.strptime(email_stop[0], '%M:%S.%f')
        total_time = time_out - time_in

        # Convert timedelta to datetime
        total_time_datetime = datetime(1, 1, 1) + total_time

        # Add entry to result
        result.append({
            'EmailID': email_start[3].split('?')[0],
            'TimeIn': time_in.strftime('%M:%S.%f')[:-3],
            'TimeOut': time_out.strftime('%M:%S.%f')[:-3],
            'TotalTime': total_time_datetime.strftime('%M:%S.%f')[:-3],
            'Event': email_stop[2],
            'CountMoves': email_event_count
        })

        # Remove all lines marked 'consumed' from the list
        rows = [r for r in rows if r not in [email_start, email_stop]]

        # Start over from the beginning of the list
        i = 0
    else:
        i += 1

# Save result to CSV
with open('output_result/events-15-result.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['EmailID','TimeIn', 'TimeOut', 'TotalTime', 'Event', 'CountMoves'])
    for row in result:
        writer.writerow([row['EmailID'], row['TimeIn'], row['TimeOut'], row['TotalTime'], row['Event'], row['CountMoves']])
