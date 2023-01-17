CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username text,
  password text
);

CREATE TABLE profiles(
  id SERIAL PRIMARY KEY,
  starting_weight float,
  goal_weight float,
  start_date date,
  max_chain int,
  user_id int,
  created_at date,
  updated_at date,
  FOREIGN KEY ("user_id") REFERENCES users(id)
);

CREATE TABLE journal_entries(
  id SERIAL PRIMARY KEY,
  entry_date date,
  weight float,
  exercise_goal_met boolean,
  caloric_intake float,
  protein_intake float,
  notes text,
  user_id int,
  created_at date,
  updated_at date,
  FOREIGN KEY ("user_id") REFERENCES users(id)
);

