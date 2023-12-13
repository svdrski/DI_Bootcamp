import random


class Gene:
    def __init__(self, value):
        self.value = value
    def mutate(self):
        self.value =  1 - self.value

class Chromosome:
    def __init__(self, genes=None):
        self.genes = genes or [Gene(random.randint(0, 1)) for _ in  range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5: gene.mutate()


class DNA():
    def __init__(self, chromosome=None):
        self.chromosome = chromosome or [Chromosome() for i in range(10)]

    def mutate(self):
        for chromosome in self.chromosome:
            if random.random() < 0.5: chromosome.mutate()



class Organism():
    def __init__(self,dna, environment):
        self.dna = dna or DNA()
        self.environment = environment


    def mutate(self):
        if random.random() < self.environment: self.dna.mutate()



dnnnaaa = DNA([Chromosome([Gene(1) for _ in range(10)]) for  _ in  range(10)])

organism = Organism(DNA(), 0.5)



A = Chromosome()
print([i.value for i in A.genes])

B = DNA()
print([x.value for y in [i.genes for i in B.chromosome] for x in y])

generations = 0

while str(organism.dna) != str(dnnnaaa):
    organism.mutate()
    generations += 1

print(str(organism.dna))