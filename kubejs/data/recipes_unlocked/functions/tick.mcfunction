execute run scoreboard objectives add firstjoin dummy
execute run scoreboard players add @p firstjoin 1
execute if score @p firstjoin matches 1 run recipe give @a *
execute if score @p firstjoin matches 2.. run scoreboard players add @p firstjoin 2
