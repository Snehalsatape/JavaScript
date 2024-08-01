num = int(input("Enter a number"))
order =len(str(num))
temp =num

sum = 0

while temp>0:
    digit =temp%10
    sum+=digit **order
    temp = temp//10
    if num==sum:
        print("Armstrong")
    else:
        print("Not an Armstrong number")

