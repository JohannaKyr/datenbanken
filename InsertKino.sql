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
 