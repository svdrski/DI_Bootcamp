brands = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
brands = list(brands.split(','))
print(len(brands))
print(sorted(brands, reverse=brands))

with_O = 0
without_I = 0
for i in brands:
   if 'o' in i.lower() : with_O +=1

for i in brands:
   if not 'i' in i.lower() : without_I +=1

print(with_O)
print(without_I)


brands2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
nenrepeat = set(brands2)
listbrands = list(nenrepeat)
print(', '.join(listbrands), 'LENGTH', len(listbrands))


import  random

result = [''.join(random.sample(i, len(i))) for i in listbrands]
print(sorted(result))