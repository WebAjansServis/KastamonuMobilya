import React, { useState } from 'react';
import { PROJECTS, BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';
import { ProjectItem } from '../types';
import { Eye, MapPin, X, MessageCircle, Info } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'mutfak', label: 'Mutfak' },
    { id: 'gomme-dolap', label: 'Gömme Dolap' },
    { id: 'vestiyer', label: 'Vestiyer' },
    { id: 'banyo', label: 'Banyo' },
    { id: 'ozel-mobilya', label: 'Özel Mobilya' },
    { id: 'tamirat', label: 'Tamirat' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projelerimiz" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Referans İmalatlarımız
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Gerçek İşlerimizden Örnekler
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Arnavutköy ve çevresindeki müşterilerimizin evlerinde uyguladığımız özel ölçü mobilya ve marangozluk projeleri.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-bold transition-all rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-[#1c1c1c] text-[#a67c52] border border-[#a67c52] shadow-sm'
                  : 'bg-white text-stone-700 hover:text-[#a67c52] border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-sm overflow-hidden border border-stone-200 shadow-sm hover:border-[#a67c52] transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#1c1c1c] text-[#a67c52] text-[10px] font-bold uppercase tracking-wider border border-[#a67c52]/40 rounded-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Eye Icon Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-[#a67c52] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform rounded-sm">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base font-bold leading-tight mb-1 group-hover:text-[#a67c52] transition-colors">
                    {project.title}
                  </h3>

                  {project.location && (
                    <div className="flex items-center gap-1 text-[11px] text-stone-300">
                      <MapPin className="w-3 h-3 text-[#a67c52]" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photos Easy Swap Notice */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-700 text-xs flex items-center gap-3 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-amber-700 shrink-0" />
          <span>
            <strong>İşletme Notu:</strong> Tüm proje fotoğrafları atölyenizde çekilen yeni montaj resimleriyle <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">src/data/mockData.ts</code> içerisinden kolayca güncellenebilir.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-stone-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-800 text-white relative flex flex-col max-h-[90vh]">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-stone-950/80 hover:bg-stone-950 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-black overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/40">
                  {selectedProject.categoryLabel}
                </span>

                {selectedProject.location && (
                  <span className="flex items-center gap-1 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {selectedProject.location}
                  </span>
                )}
              </div>

              <h3 className="font-heading text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(`Merhaba, "${selectedProject.title}" tarzında bir mobilya yaptırmak istiyorum. Fiyat alabilir miyim?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-extrabold text-sm shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-stone-950" />
                  <span>Bu Modeli WhatsApp'tan Sor</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-sm"
                >
                  Kapat
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
