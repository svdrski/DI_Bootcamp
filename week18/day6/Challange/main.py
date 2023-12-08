value = 'You have entered a wrong domain'
value = value.split()
result = []
for i in value:
    result.insert(0, i)
print(' '.join(result))