from  collections import  Counter
import  string

stopWords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]
class Text:
    def __init__(self, text='A good book would sometimes cost as much as a good house.'):
        self.text = text

    def count(self, word):
        list = Counter(self.text.split())[word]
        return None if list == 0 else list

    def mostCommon(self):
        return (Counter(self.text.split()).most_common()[0][0])

    def unique(self):
        return ([x for x in Counter(self.text.split())])

    def from_file(self, file):
        with open(file, 'r') as file:
            self.text = file.read()

a = Text()

print(a.mostCommon())
print(a.count('good'))
print(a.unique())

a.from_file('the_stranger.txt')

print(a.count('good'))
# print(a.unique())
print(a.mostCommon())


class TextModification(Text):

    def remPunct(self):
        values  = string.punctuation
        result = self.text.translate(str.maketrans('','', values))
        return result

    def withoutStop(self):
        words = self.text.split()
        return ' '.join([i for i in words if i not in stopWords])

    def withoutWord(self, word):
        words = self.text.split()
        return ' '.join([i for i in words if i.lower() != word.lower()])


b = TextModification()

# b.from_file('the_stranger.txt')
print(b.remPunct())
print(b.withoutStop())
print(b.withoutWord(''))