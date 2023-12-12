class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        msg = f'{self.phone_number} call to {other_phone}'
        print(msg)
        self.call_history.append(msg)

    def show_call_history(self):
        print(self.call_history)


    def send_message(self,other_phone, msg):
        self.messages.append({'to':other_phone, 'from':self.phone_number, 'msg': msg})

    def show_outgoing_messages(self):
        return [i for i in  self.messages if i['from'] == self.phone_number]

    def show_incoming_messages(self):
        return [i for i in self.messages if i['to'] == self.phone_number]

    def show_messages_from(self, sender):
        return [i for i in self.messages if i['from'] == sender]

name = Phone('245-54-44')
name.call('334-5-5')
name.show_call_history()
name.send_message('244-44-45', 'Hello s')
name.send_message('254-44-45', 'Hellffo s')
print(name.show_outgoing_messages())
print(name.show_incoming_messages())
print(name.show_messages_from('245-54-44'))