class AnagramChecker:
    def __init__(self):
        with open('sowpods.txt', 'r') as file:
            self.words = file.read().split()

    def is_valid_word(self, word):
        if word.upper() not in self.words: return  False
        return  True

    def is_anagram(self, word1, word2):
        if len(word1) != len(word2): return False
        for i in word1:
            if i not in word2:
                return False
            index = word2.find(i)
            word2 = word2[:index] + word2[index + 1:]
        return True

    def get_anagrams(self, word):
        result = []
        for i in self.words:
            if self.is_anagram(word.upper(), i):
                result.append(i)
        return result


# a = AnagramChecker()
# print(a.is_anagram('mate', 'meat'))
# print(a.get_anagrams('mate'))
# print(a.is_valid_word('hello'))

