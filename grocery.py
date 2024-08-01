import datetime

grocery_list =["Meat","Cheese"]
print("Welcome to the Grocery shopping List Program!")

time = datetime.datetime.now()
month = str(time.month).zfill(2)
day = str(time.day).zfill(2)
hour = str(time.hour).zfill(2)
minute = str(time.minute).zfill(2)
print(f"current date and time: {month}/{day} {hour}:{minute}")

print(f"initial grocery list:{','.join(grocery_list)}")

for i in range(3):
    new_item = input(f"Enter food item{i+1} to add to the list: ").title()
    grocery_list.append(new_item)
print(f"Updated grocery lists:{','.join(grocery_list)}")

grocery_list.sort()
print(f"sorted grocery_list:{','.join(grocery_list)}")

for _ in range(3):
    print(f"Current list length: {len(grocery_list)}")
    print(f"Current grocery list: {', '.join(grocery_list)}")
    purchased_item = input("What item did you just purchase? ").title()

if purchased_item in grocery_list:
        grocery_list.remove(purchased_item)
        print(f"{purchased_item} removed from the list.")
else:
        print(f"{purchased_item} is not in the list.")

if len(grocery_list) == 2:
    print(f"Final grocery list: {', '.join(grocery_list)}")
    out_of_stock_item = grocery_list.pop()  # Remove one item
    print(f"The store is out of {out_of_stock_item}.")
    
    replacement_item = input("Enter the new item to replace it: ").title()
    grocery_list.insert(0, replacement_item)  # Insert at the beginning

    # Print the final grocery list
    print(f"Final grocery list: {', '.join(grocery_list)}")

