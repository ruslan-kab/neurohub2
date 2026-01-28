
const SPACE_ID = (import.meta as any).env?.VITE_CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = (import.meta as any).env?.VITE_CONTENTFUL_ACCESS_TOKEN || '';

export async function fetchFromContentful(contentType: string) {
  if (!SPACE_ID || !ACCESS_TOKEN) {
    console.warn('Contentful credentials missing, using local constants.');
    return null;
  }

  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${contentType}`
    );
    if (!response.ok) throw new Error('Failed to fetch from Contentful');
    const data = await response.json();
    
    // Маппинг данных из формата Contentful в наш формат
    return data.items.map((item: any) => ({
      id: item.sys.id,
      ...item.fields,
      // Если есть вложения (картинки), нужно найти их в data.includes.Asset
      previewUrl: item.fields.image ? 
        `https:${data.includes.Asset.find((a: any) => a.sys.id === item.fields.image.sys.id).fields.file.url}` : 
        item.fields.previewUrl
    }));
  } catch (error) {
    console.error('Contentful error:', error);
    return null;
  }
}
