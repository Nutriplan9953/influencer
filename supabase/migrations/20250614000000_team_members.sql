-- Teams table (for multi-tenant/team support)
create table if not exists teams (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  created_by uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc', now())
);

-- Team members table
create table if not exists team_members (
  id uuid primary key default uuid_generate_v4(),
  team_id uuid references teams(id) on delete cascade,
  user_id uuid references auth.users(id),
  email text not null,
  role text not null check (role in ('admin', 'manager', 'user')),
  status text not null default 'invited' check (status in ('invited', 'accepted', 'removed')),
  invited_by uuid references auth.users(id),
  invited_at timestamp with time zone default timezone('utc', now()),
  accepted_at timestamp with time zone
);

-- Index for quick lookup
create index if not exists idx_team_members_team_id on team_members(team_id);
create index if not exists idx_team_members_email on team_members(email);
