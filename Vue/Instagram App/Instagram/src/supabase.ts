import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://czsnxkqrhyoeewadsqwg.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6c254a3FyaHlvZWV3YWRzcXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3ODY0MTcsImV4cCI6MTk5NzM2MjQxN30.i5fXGDVgM4G-VUsfi0j8KvyW5Cx9eEJHTsFYH0Of4Xc";
export const supabase = createClient(supabaseUrl, supabaseKey);
