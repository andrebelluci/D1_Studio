CREATE or ALTER view AndrVwContactAgeDays as
select Id as AndrId, Name as AndrName, BirthDate as AndrBirthDate,
datediff(day, BirthDate, getdate()) as AndrAgeDays,
Id as AndrContactId
from Contact