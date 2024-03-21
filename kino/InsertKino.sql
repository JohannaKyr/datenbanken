-- Füge die Regisseure ein
INSERT INTO Regisseur (Vorname, Nachname, Geburtsdatum) VALUES
('Chris', 'Columbus', '1958-09-10'),
('James',  'Wan', '1977-02-27'),
('Francis Ford', 'Coppola', '1939-04-07'),
('Ridley', 'Scott', '1937-11-30'),
('Michel',  'Hazanavicius', '1967-03-29');
 
-- Füge die Filme ein und setze die entsprechenden Foreign Keys
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES
('Harry Potter 1', 159, 2001, 1),    -- Chris Columbus
('Insidius', 142, 2010, 2),          -- James Wan
('Der Pate', 175, 1972, 3),          -- Francis Ford Coppola
('Der Marsianer', 151, 2015, 4),     -- Ridley Scott
('Intime', 109, 2011, 5);            -- Michel Hazanavicius

delete FROM Film WHERE FilmID >5

INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Aquaman', 143, 2018, 2);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Apocalypse Now', 153, 1979, 3);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Blade Runner', 117, 1982, 4);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('The Artist', 100, 2011, 5);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Harry Potter 3', 142, 2004, 1);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('The Godfather Part II', 200, 1974, 3);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('The Godfather Part III', 162, 1990, 3);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Alien', 117, 1979, 4); -- obwohl es ein Sci-Fi Horrorfilm ist, könnte er aufgrund seiner historischen Bedeutung und künstlerischen Qualität für ältere Jugendliche geeignet sein
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Gladiator', 155, 2000, 4);
INSERT INTO Film (Titel, Länge, Jahr, RegisseurID) VALUES ('Harry Potter 2', 161, 2002, 1);