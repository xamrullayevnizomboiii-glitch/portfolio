with open("c:/Users/User/Desktop/Vibe coding/portfolio/nizom-v3/assets/app-v35.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = lines[:17211] + lines[17314:]

with open("c:/Users/User/Desktop/Vibe coding/portfolio/nizom-v3/assets/app-v35.js", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
