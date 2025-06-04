
import React from 'react';

const SmalandSection = () => {
  return (
    <section className="bg-warmBrown-50 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Småland?
          </h2>
          <p className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed">
            Smålänningarna har förstått att framgång nås bäst genom ihärdighet, idogt arbete och disciplin. 
            Vårda tid och resurser är en stabil bas för att få bästa möjliga utfall. Något som jag haft stor 
            nytta av i mitt arbete med utvecklingsprocesser.
          </p>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-8">
            <div className="w-3 h-3 bg-warmBrown-400 rounded-full"></div>
            <div className="w-3 h-3 bg-warmBrown-600 rounded-full"></div>
            <div className="w-3 h-3 bg-warmBrown-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmalandSection;
