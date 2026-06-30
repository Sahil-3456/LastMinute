/*
# Create tasks table (single-tenant, no auth)

1. New Tables
- `tasks`
- `id` (uuid, primary key)
- `title` (text, not null)
- `deadline` (text, not null)
- `importance` (integer, not null)
- `effort` (integer, not null)
- `category` (text, not null)
- `notes` (text, not null)
- `score` (double precision, not null)
- `completed` (boolean, default false)
- `created_at` (timestamp with time zone)

2. Security
- Enable RLS on `tasks`.
- Allow anon + authenticated CRUD (single-tenant app, no login required).
*/

CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  deadline text NOT NULL,
  importance integer NOT NULL,
  effort integer NOT NULL,
  category text NOT NULL,
  notes text NOT NULL DEFAULT '',
  score double precision NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_tasks" ON tasks;
CREATE POLICY "anon_select_tasks" ON tasks FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_tasks" ON tasks;
CREATE POLICY "anon_insert_tasks" ON tasks FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_tasks" ON tasks;
CREATE POLICY "anon_update_tasks" ON tasks FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_tasks" ON tasks;
CREATE POLICY "anon_delete_tasks" ON tasks FOR DELETE
  TO anon, authenticated USING (true);