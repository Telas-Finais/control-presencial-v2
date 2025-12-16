import { supabase } from './supabase.js';

console.log('Supabase conectado desde app.js:', supabase);

// Prueba real contra la BD
(async () => {
  const { data, error } = await supabase
    .from('workers')
    .select('id')
    .limit(1);

  if (error) {
    console.error('❌ Error Supabase:', error);
  } else {
    console.log('✅ Supabase OK, workers:', data);
  }
})();
