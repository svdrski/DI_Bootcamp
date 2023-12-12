class Pagination():
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 1

    def getVisibleItems(self):
        print(self.items[self.pageSize * self.currentPage - self.pageSize : self.pageSize * self.currentPage])

    def nextPage(self):
        self.currentPage += 1
        self.getVisibleItems()

    def prevPage(self):
        self.currentPage -= 1
        self.getVisibleItems()

    def lastPage(self):
        self.currentPage = int(len(self.items) / self.pageSize) + 1
        self.getVisibleItems()

    def goToPage(self,page):
        self.currentPage = page
        self.getVisibleItems()

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.getVisibleItems()
p.nextPage()
p.nextPage()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.prevPage()
p.lastPage()
p.goToPage(4)
