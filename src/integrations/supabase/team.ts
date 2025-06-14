import { supabase } from './client';

// Create a new team
export async function createTeam(name: string, created_by: string) {
  const { data, error } = await supabase
    .from('teams')
    .insert([{ name, created_by }])
    .select()
    .single();
  return { data, error };
}

// Invite a team member
export async function inviteTeamMember(team_id: string, email: string, role: string, invited_by: string) {
  const { data, error } = await supabase
    .from('team_members')
    .insert([{ team_id, email, role, invited_by }])
    .select()
    .single();
  return { data, error };
}

// List team members
export async function listTeamMembers(team_id: string) {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .eq('team_id', team_id);
  return { data, error };
}

// Accept invitation (called after user signs up)
export async function acceptInvitation(email: string, user_id: string) {
  const { data, error } = await supabase
    .from('team_members')
    .update({ status: 'accepted', user_id, accepted_at: new Date().toISOString() })
    .eq('email', email)
    .eq('status', 'invited')
    .select()
    .single();
  return { data, error };
}

// Remove a team member
export async function removeTeamMember(team_member_id: string) {
  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', team_member_id);
  return { error };
}
