# import matplotlib.pyplot as plt
# from datetime import datetime, timedelta
# import pytz
# import random
#
# def init_plot():
#     plt.ylabel('Humidity (%)')
#     plt.title('Three-Day Humidity Forecast')
#     plt.xticks([])
#
# def plot_temperatures(dates, humidities):
#     bar_width = 0.5
#     bar_positions = range(len(dates))
#
#     plt.bar(bar_positions, humidities, width=bar_width, color='blue', alpha=0.7, label='Humidity')
#     plt.legend()
#
# def write_humidity_on_bar_chart(dates, humidities):
#     for i, humidity in enumerate(humidities):
#         plt.text(i, humidity + 1, f'{humidity}%', ha='center', va='bottom')
#
# def get_three_day_humidity_forecast(city_name):
#     # Генерируем случайные данные для иллюстрации
#     dates = [(datetime.now() + timedelta(hours=i)).strftime('%b %d, %Y %H:%M:%S') for i in range(0, 72, 3)]
#     humidities = [random.randint(40, 80) for _ in range(len(dates))]
#     return dates, humidities
#
# def create_weather_gui(city_name):
#     dates, humidities = get_three_day_humidity_forecast(city_name)
#
#     init_plot()
#     plot_temperatures(dates, humidities)
#     write_humidity_on_bar_chart(dates, humidities)
#
#     plt.show()
#
# # Пример использования:
#
# # Замените 'your_city_name' на ваш город
# create_weather_gui('your_city_name')

import matplotlib.pyplot as plt
from datetime import datetime, timedelta
import random

# def create_weather_gui():
#     # Захардкодим случайные данные для иллюстрации
#     dates = [(datetime.now() + timedelta(hours=i)).strftime('%b %d, %Y %H:%M:%S') for i in range(0, 72, 3)]
#     humidities = [random.randint(40, 80) for _ in range(len(dates))]
#
#     # Инициализируем график
#     plt.ylabel('Humidity (%)')
#     plt.title('Frrororcast')
#     plt.xticks([])
#
#     # Строим бар-чарт
#     bar_width = 0.5
#     bar_positions = range(len(dates))
#     plt.bar(bar_positions, humidities, width=bar_width, color='red', alpha=0.7, label='Humidity')
#     plt.legend()
#
#     # Подписываем влажность на бар-чарте
#     for i, humidity in enumerate(humidities):
#         plt.text(i, humidity + 1, f'{humidity}%', ha='center', va='bottom')
#
#     # Отображаем график
#     plt.show()
#
# # Запускаем функцию
# create_weather_gui()

from pyowm import OWM
from pyowm.utils import config
from pyowm.utils import timestamps


owm = OWM('97e9a597f7a43b9ab62ddf594c713d6e')
mgr = owm.weather_manager()


# Search for current weather in London (Great Britain) and get details
observation = mgr.weather_at_place('London,GB')

