import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
const SERVER_API = process.env.PROD_SUPPORT_SERVER_API || '';

if (!SUPABASE_URL || !SERVER_API) {
  console.log('Supabase configuration error!');
}

const supabase = createClient(SUPABASE_URL, SERVER_API);

export default supabase;
