SELECT* FROM Orders;
SELECT*FROM Customers;

SELECT * 
FROM Customers 
LEFT JOIN Orders
On Customers.CostumerID = Orders.CustomerID