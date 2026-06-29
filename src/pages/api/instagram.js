// src/pages/api/instagram.js

export default async function handler(req, res) {
  // We store the token in the .env.local file for security
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return res.status(400).json({ error: "Instagram token not configured." });
  }

  try {
    // Fetch the latest media from your Instagram account
    // We request the ID, type of media, image URL, and the link to the post
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption&limit=8&access_token=${token}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Filter out videos if you only want images, or use thumbnail_url for videos
    const posts = data.data.map((post) => ({
      id: post.id,
      src: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
      link: post.permalink,
      caption: post.caption || "Instagram Post",
      // The basic API doesn't provide live like/comment counts due to privacy laws,
      // so we hide those icons or use static placeholders for the UI effect.
    }));

    res.status(200).json({ posts });
  } catch (error) {
    console.error("Instagram API Error:", error);
    res.status(500).json({ error: "Failed to fetch Instagram feed." });
  }
}
