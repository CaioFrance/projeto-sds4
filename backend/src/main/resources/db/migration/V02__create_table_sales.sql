CREATE TABLE sales (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	visited INT NOT NULL,
	deals INT NOT NULL,
	amount REAL NOT NULL,
	seller_id BIGINT REFERENCES sellers,
	date DATE NOT NULL
);