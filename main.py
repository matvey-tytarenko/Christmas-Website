from customtkinter import*
from tkinter import messagebox as msg

from config import*
from server import*
import webbrowser


size = "800x600"

root = CTk()
root.geometry(size)
root.title("Поздравление")
set_appearance_mode("dark")

night_sky = "#1C2951"

root.configure(fg_color=night_sky)
def click():
    toplevel = CTkToplevel(root)
    toplevel.geometry(size)
    toplevel.configure(fg_color=night_sky)
    toplevel.title("Поздравление")
    toplevel.resizable(False, False)
    root.withdraw()
    label = CTkLabel(toplevel, text="введите данные", font=("Arial", 20))
    label.pack(expand=True)
    name_entry = CTkEntry(toplevel, width=200, height=20, font=("Arial", 20), placeholder_text="Name: Jhon Doe")
    email_entry = CTkEntry(toplevel, width=200, height=20, font=("Arial", 20), placeholder_text="Email: doe.jhon@example.com")
    def on_submit():
        get_info(name_entry, email_entry)
    btn = CTkButton(toplevel, text="Получить Поздравление", font=("Arial", 20), command=on_submit)
    name_entry.pack(expand=True)
    email_entry.pack(expand=True)
    btn.pack(expand=True)

def get_info(name_entry, email_entry):
    name = name_entry.get()
    email = email_entry.get()
    if not name or not email:
        msg.showerror(title="Ошибка",message="Введите имя и email")
    elif "@" not in email:
        msg.showerror(title="Ошибка", message= "Введите корректный email" )
    else:
        msg.showinfo(title="Поздравление", message= "Поздравление отправлено вам на почту!" )
        get_congratulation(name, email)

def click_website():
    webbrowser.open("https://christmas-website-client.vercel.app/")

btn_start = CTkButton(root, text="Получить Поздравление", font=("Arial", 20), command=click)
btn_start.pack(expand=True)
btn_website = CTkButton(root, text="Перейти на сайт", command=click_website, font=("Arial", 22))
btn_website.pack(anchor="se")
btn_website.place(y=12)


if __name__ == "__main__":
    root.mainloop()