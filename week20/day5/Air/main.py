from datetime import datetime, timedelta

class Airline:
    def __init__(self, id, name, planes):
        self.id = id
        self.name = name
        self.planes = planes

class Airplane:
    def __init__(self, id, current_location, company, next_flights):
        self.id = id
        self.current_location = current_location
        self.company = company
        self.next_flights = next_flights

    def fly(self, destination):
        if self.next_flights:
            self.next_flights[0].take_off()
        self.current_location = None

    def location_on_date(self, date):
        for flight in self.next_flights:
            if flight.date == date:
                return flight.destination.city
        return None

    def available_on_date(self, date, location):
        for flight in self.next_flights:
            if flight.date == date and flight.origin.city == location and not self.next_flights[0].date <= date:
                return True
        return False


class Flight:
    def __init__(self, date, destination, origin, plane, id):
        self.date = date
        self.destination = destination
        self.origin = origin
        self.plane = plane
        self.id = id

    def take_off(self):
        self.plane.current_location = None

    def land(self):
        self.plane.current_location = self.destination.city


class Airport:
    def __init__(self, city, planes, scheduled_departures, scheduled_arrivals, Flight):
        self.city = city
        self.planes = planes
        self.scheduled_departures = scheduled_departures
        self.scheduled_arrivals = scheduled_arrivals
        self.Flight = Flight

    def schedule_flight(self, destination, datetime):
        for plane in destination.company.planes:
            if plane.available_on_date(datetime, self.city):
                flight = self.Flight(datetime, destination, self, plane)
                plane.next_flights.append(flight)
                destination.scheduled_arrivals.append(flight)
                self.scheduled_departures.append(flight)
                return

    def info(self, start_date, end_date):
        for flight in sorted(self.scheduled_departures, key=lambda x: x.date):
            if start_date <= flight.date <= end_date:
                print(f"Flight ID: {flight.id}, Date: {flight.date}, Destination: {flight.destination.city}")


boeing737 = Airplane(11, 'Tel_Aviv', 'Elal', [])

print(boeing737.current_location)

boeing737.fly('Eilat')
