CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY,
    CustomerName TEXT NOT NULL,
    ContactName TEXT NOT NULL,
    Country TEXT NOT NULL
);

CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY,
    CustomerID INTEGER NOT NULL,
    OrderDate TEXT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Country) VALUES
(1, 'Alfreds Futterkiste', 'Maria Anders', 'Germany'),
(2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mexico'),
(3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mexico');

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(10308, 2, '1996-09-18'),
(10365, 3, '1996-11-27'),
(10383, 3, '1996-12-16'),
(10355, 3, '1996-11-15'),
(10278, 1, '1996-08-12');

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Country) VALUES
(4, 'Bianchi Biciclette', 'Luca Bianchi', 'Italy');
(5, 'Chop Suey Chinese', 'Li Wei', 'China');

SELECT *
FROM Customers LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID; 