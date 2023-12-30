
#1

# from collections import deque
#
# class TaskManager():
#     def __init__(self):
#         self.queue = deque()
#     def add(self, descript, priority):
#         self.queue.append((descript, priority))
#         print(descript, priority)
#
#     def get(self):
#         if not self.queue:
#             print('Empty')
#             return
#         self.queue = deque(sorted(self.queue, key=lambda x: x[1]))
#         print(self.queue.popleft()[0])
#
#     def show(self):
#         print(list(self.queue))
#
#
#
# tasker = TaskManager()
# tasker.add('Cleaning', 2)
# tasker.add('Washing', 1)
# tasker.add('Cleaning', 3)
# tasker.get()
# tasker.show()



#2

# from  collections import  deque
# def checker(word):
#     word = word.lower()
#     deq = deque()
#     for i in word:
#         deq.append(i)
#
#     while len(deq)  > 1:
#         first = deq.popleft()
#         last = deq.pop()
#         if first != last:
#             return False
#
#     return True
#
# print(checker('Racecar'))
# print(checker('Hello'))



class Node:
    def __init__(self, value):
        self.value = value
        self.next = None



class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new = Node(value)
        if self.head is None:
            self.head = new
            return

        active = self.head
        while active.next:
            active = active.next
        active.next = new





def merge_sorted_linked_lists(list1, list2):
    dummy = Node(0)
    active = dummy

    pointer1, pointer2 = list1.head, list2.head
    while pointer1 is not  None and pointer2 is not  None:
        if pointer1.value < pointer2.value:
            active.next = pointer1
            pointer1 = pointer1.next
        else:
            active.next = pointer2
            pointer2 = pointer2.next
        active = active.next

    if pointer1 is not None:
        active.next = pointer1
    elif pointer2 is not None:
        active.next = pointer2

    return dummy.next


list1 = LinkedList()
list1.append(1)
list1.append(3)
list1.append(5)

list2 = LinkedList()
list2.append(2)
list2.append(4)
list2.append(6)


result = merge_sorted_linked_lists(list1, list2)

while result is not None:
    print(result.value)
    result = result.next
