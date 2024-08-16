import React from 'react';

const Dealer = ({Data}) => {
  return (
    <div
      className="bg-cover bg-center text-white p-16 text-center"
      style={{ backgroundImage: `url(${Data?.homeJoinBackgroundImage.node.sourceUrl})` }}
    >
      <p className="text-lg">{Data?.homeJoinSubtitle}</p>
      <p className="text-3xl font-bold py-1">{Data?.homeJoinTitle}</p>
       <p
        className="pb-4 pt-1 w-1/2 mx-auto"
        dangerouslySetInnerHTML={{
          __html: Data?.homeJoinDescription.replace('<p>', '<p">'),
        }}
      />
      <a href={Data?.homeJoinButton?.url} target="_blank" rel="noopener noreferrer" className="relative">
      <button className="text-xs rounded-full bg-white text-black py-3 px-6 font-semibold">
      {Data?.homeJoinButton?.title}
      </button>
      </a>
    </div>
  );
};

export default Dealer;
