import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Utensils, 
  Moon, 
  Sun,
  Globe,
  X
} from 'lucide-react';
import { 
  MENU_EN, 
  MENU_ZH, 
  getWeekType, 
  DAYS_OF_WEEK, 
  DAYS_OF_WEEK_ZH 
} from './data';

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date('2026-02-16'));
  const [language, setLanguage] = useState<'EN' | 'ZH'>('ZH');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthYear = useMemo(() => {
    return currentDate.toLocaleString(language === 'ZH' ? 'zh-CN' : 'en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  }, [currentDate, language]);

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    let startDay = firstDay.getDay(); 
    const padding = startDay === 0 ? 6 : startDay - 1;
    
    for (let i = 0; i < padding; i++) {
      days.push(null);
    }
    
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    
    return days;
  }, [currentDate]);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'ZH' : 'EN');
  };

  const t = (zh: string, en: string) => language === 'ZH' ? zh : en;

  return (
    <div className="h-screen flex flex-col bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-emerald-100 overflow-hidden">
      {/* Header - More Compact */}
      <header className="shrink-0 bg-white/90 backdrop-blur-xl border-b border-black/5 px-4 py-2 shadow-sm z-30">
        <div className="max-w-[98vw] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 rotate-2">
              <Utensils size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-600">
                {t('校园膳食菜单', 'Campus Dining Menu')}
              </h1>
              <p className="text-[9px] text-emerald-600/60 font-bold uppercase tracking-[0.2em]">
                {t('三周循环系统', '3-Week Cycle System')}
              </p>
            </div>
          </div>

          <button 
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-black/5 hover:border-emerald-500/30 hover:bg-emerald-50 transition-all shadow-sm active:scale-95"
          >
            <Globe size={16} className="text-emerald-600 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold text-gray-600">
              {language === 'ZH' ? 'English' : '中文'}
            </span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col max-w-[98vw] mx-auto w-full px-2 py-2 overflow-hidden">
        {/* Month Selector - More Compact */}
        <div className="shrink-0 flex items-center justify-between mb-2 bg-white p-3 rounded-2xl shadow-md border border-black/5">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold tracking-tight text-center capitalize">
              {monthYear}
            </h2>
            <div className="flex items-center gap-2 text-emerald-600 opacity-60">
              <CalendarIcon size={12} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                {t('选择月份', 'Select Month')}
              </span>
            </div>
          </div>

          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Calendar Grid Header */}
        <div className="shrink-0 grid grid-cols-7 gap-2 mb-1">
          {(language === 'ZH' ? DAYS_OF_WEEK_ZH : DAYS_OF_WEEK).map((day, idx) => (
            <div key={idx} className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid Body - Fills remaining space */}
        <div className="flex-grow grid grid-cols-7 gap-2 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentDate.toISOString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="contents"
            >
              {daysInMonth.map((date, idx) => {
                if (!date) return <div key={`empty-${idx}`} className="bg-gray-50/30 rounded-xl" />;
                
                const weekType = getWeekType(date);
                const dayName = DAYS_OF_WEEK[date.getDay() === 0 ? 6 : date.getDay() - 1];
                const menuEn = MENU_EN[weekType][dayName];
                const menuZh = MENU_ZH[weekType][dayName];
                const isToday = new Date().toDateString() === date.toDateString();

                return (
                  <motion.div 
                    key={date.toISOString()}
                    layoutId={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    whileHover={{ scale: 1.01, zIndex: 10 }}
                    className={`group relative bg-white rounded-xl p-2.5 shadow-sm border transition-all cursor-pointer flex flex-col overflow-hidden
                      ${isToday ? 'border-emerald-500 ring-2 ring-emerald-500/10' : 'border-black/5 hover:shadow-lg hover:border-emerald-200'}
                    `}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <span className={`text-lg font-bold ${isToday ? 'text-emerald-600' : 'text-gray-900'}`}>
                        {date.getDate()}
                      </span>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md uppercase tracking-tighter border border-emerald-100">
                        W{weekType}
                      </span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center gap-2 min-h-0">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 uppercase tracking-tighter">
                          <Sun size={12} />
                          {t('午餐', 'Lunch')}
                        </div>
                        <p className="text-xs leading-snug text-gray-600 font-medium line-clamp-2">
                          {t(menuZh.Lunch, menuEn.Lunch)}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-indigo-600 uppercase tracking-tighter">
                          <Moon size={12} />
                          {t('晚餐', 'Dinner')}
                        </div>
                        <p className="text-xs leading-snug text-gray-600 font-medium line-clamp-2">
                          {t(menuZh.Dinner, menuEn.Dinner)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer - More Compact */}
      <footer className="shrink-0 bg-white/80 backdrop-blur-md border-t border-black/5 py-2 px-4 z-20">
        <div className="max-w-[98vw] mx-auto flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{t('今日', 'Today')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-white border border-black/10 rounded-full" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{t('其他', 'Others')}</span>
            </div>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600/60">
            {t('点击卡片查看完整菜单', 'Click card for full menu')}
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDate && (() => {
          const weekType = getWeekType(selectedDate);
          const dayName = DAYS_OF_WEEK[selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1];
          const menuEn = MENU_EN[weekType][dayName];
          const menuZh = MENU_ZH[weekType][dayName];
          
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDate(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />
              <motion.div 
                layoutId={selectedDate.toISOString()}
                className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl font-light tracking-tight mb-2">
                        {selectedDate.getDate()} <span className="text-xl text-gray-400">{monthYear}</span>
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                          Week {weekType}
                        </span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          {t(DAYS_OF_WEEK_ZH[selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1], dayName)}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedDate(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <section className="relative p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100">
                      <div className="flex items-center gap-3 text-emerald-600 mb-4">
                        <Sun size={24} strokeWidth={2.5} />
                        <h4 className="text-lg font-bold uppercase tracking-widest">{t('午餐', 'Lunch')}</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xl font-medium leading-tight text-gray-800">{menuEn.Lunch}</p>
                        <div className="h-px bg-emerald-200/50 w-12" />
                        <p className="text-base text-emerald-800/60 italic font-medium">{menuZh.Lunch}</p>
                      </div>
                    </section>

                    <section className="relative p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100">
                      <div className="flex items-center gap-3 text-indigo-600 mb-4">
                        <Moon size={24} strokeWidth={2.5} />
                        <h4 className="text-lg font-bold uppercase tracking-widest">{t('晚餐', 'Dinner')}</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xl font-medium leading-tight text-gray-800">{menuEn.Dinner}</p>
                        <div className="h-px bg-indigo-200/50 w-12" />
                        <p className="text-base text-indigo-800/60 italic font-medium">{menuZh.Dinner}</p>
                      </div>
                    </section>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 flex justify-center">
                  <button 
                    onClick={() => setSelectedDate(null)}
                    className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-colors shadow-lg shadow-black/10 active:scale-95"
                  >
                    {t('关闭', 'Close')}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
