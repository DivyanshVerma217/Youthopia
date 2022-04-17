import React from "react";
import Gallery from "react-photo-gallery";

function Gallery1() {
  const photos = [
    {
      src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      width: 4,
      height: 4,
    },
    {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
    },
    {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 4,
      },
      {
          src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
          width: 4,
          height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 4,
      },
      {
          src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
          width: 4,
          height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 4,
      },
      {
          src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
          width: 4,
          height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 4,
      },
      {
          src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
          width: 4,
          height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        width: 4,
        height: 4,
      },
      {
          src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
          width: 4,
          height: 3,
      },

  ];

  return (
    <>
    <h1 className="max-w-6xl mx-auto mb-8 px-4 py-4 font-extrabold">GALLERY</h1>
    <div className="max-w-7xl mx-auto">

    <Gallery photos={photos} />;

    </div>
      
    </>
  );
}

export default Gallery1;
//   const photos = [
//     {
//       src: "../gallery/01.png",
//     },
//     {
//       src: "../gallery/01.png",
//     },
//     {
//       src: "../gallery/01.png",
//     },
//     {
//       src: "../gallery/01.png",
//     },
//     {
//       src: "../gallery/01.png",
//     },
//   ];

//   return (
//     <div>
//       <PhotoAlbum layout="columns" photos={photos} />
//     </div>
//   );
