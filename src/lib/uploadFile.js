// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   'https://bleqptovjlieoataglzx.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZXFwdG92amxpZW9hdGFnbHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5Njk4NjAsImV4cCI6MjA1MDU0NTg2MH0.qOQcQffR2N-9OpcWhvWk5JZz4tmBjU7-t4l4miWx2nc'
// );

// const uploadFile = async (file) => {
//   const bucketName = 'chat-app';
//   const filePath = `images/${Date.now()}-${file.name}`;

//   try {
//     // Upload the file to Supabase
//     const { data, error } = await supabase.storage.from(bucketName).upload(filePath, file);

//     if (error) throw new Error(`Upload failed: ${error.message}`);

//     // Retrieve public URL
//     const { data: urlData, error: urlError } = supabase.storage
//       .from(bucketName)
//       .getPublicUrl(filePath);

//     if (urlError) throw new Error(`Failed to retrieve URL: ${urlError.message}`);

//     return urlData.publicUrl;
//   } catch (error) {
//     console.error('Error uploading file:', error.message);
//     throw error;
//   }
// };

// export default uploadFile;
