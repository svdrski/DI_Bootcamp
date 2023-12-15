from googletrans import Translator

translator = Translator()

print(translator.translate('안녕하세요.').text)
french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
result = []
for word in french_words:
    result.append({word: translator.translate(word, src='fr', dest='en').text})

print(result)