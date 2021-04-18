import csv
import time
import shutil
from random import randrange
from datetime import timedelta, datetime
from tempfile import NamedTemporaryFile

allTimesSoFar = {} # Avoid multiple different times for the same order

def random_date(start, end):
    """
    This function will return a random datetime between two 
    datetime objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)

def getDate(orderID):
    """
    This function gets a random Date and Time within 
    the last 48 hours.
    """
    if orderID not in allTimesSoFar:
        now = datetime.now()
        before = now - timedelta(hours=48)
        newTime = str(random_date(before, now))[:19]
        allTimesSoFar[orderID] = newTime
        return newTime
    else:
        return allTimesSoFar[orderID]

def main():
    """
    Main function modifies CSV and adds random times 
    within a defined 48hr range.
    """
    filename = "orders.csv"
    temp_file = NamedTemporaryFile(mode='w+', delete=False)
    try: 
        with open(filename, "r") as csvfile, temp_file:
            reader = csv.DictReader(csvfile)
            fieldnames = ["Order ID","Restaurant","Item Name","Quantity","Product Price","Total products","Order Date"]
            writer = csv.DictWriter(temp_file, fieldnames=fieldnames)
            writer.writeheader()
            for row in reader:
                writer.writerow({
                    "OrderID": row["Order ID"],
                    "Restaurant": row["Restaurant"],
                    "ItemName":row["Item Name"],
                    "Quantity":row["Quantity"],
                    "ProductPrice":row["Product Price"],
                    "TotalProducts":row["Total products"],
                    "OrderDate": getDate(row["Order ID"])
                })
            shutil.move(temp_file.name, filename)
        print("\n*** Success: completed adding random 'Order Times' to CSV ***")
    except:
        print("An error has occured")

start_time = time.time()
main()
print("--- Completed in %s seconds ---" % (time.time() - start_time)+"\n")