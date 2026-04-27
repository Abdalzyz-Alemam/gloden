
// استيراد ملف التنسيق الأساسي (Tailwind CSS)
import './index.css';

// قائمة أصناف المنيو - تحتوي على كافة البيانات (الاسم، السعر، التصنيف، الصورة، والوصف)
const menuItems = [
  // --- المشروبات (Drinks) ---
  
  // العصائر الطبيعية (Fresh Juices)
  { id: 1, title: 'عصير قولدن', price: '13,000', category: 'juices', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'ليمون بالنعناع', price: '7,000', category: 'juices', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'ليمون بالحليب', price: '9,000', category: 'juices', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'عصير فراولة', price: '9,000', category: 'juices', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'فراولة بالحليب', price: '10,000', category: 'juices', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'عصير منقة', price: '9,000', category: 'juices', image: 'https://images.unsplash.com/photo-1553334812-3693fb0a986c?auto=format&fit=crop&q=80&w=400' },
  { id: 7, title: 'منقة بالحليب', price: '10,000', category: 'juices', image: 'https://images.unsplash.com/photo-1553334812-3693fb0a986c?auto=format&fit=crop&q=80&w=400' },
  { id: 8, title: 'عصير برتقال', price: '7,000', category: 'juices', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 9, title: 'عصير أناناس', price: '7,000', category: 'juices', image: 'https://images.unsplash.com/photo-1550506393-5cf4032d8478?auto=format&fit=crop&q=80&w=400' },
  { id: 10, title: 'عصير قريب فروت', price: '7,000', category: 'juices', image: 'https://images.unsplash.com/photo-1550506393-5cf4032d8478?auto=format&fit=crop&q=80&w=400' },
  { id: 11, title: 'كوكتيل مشكل', price: '11,000', category: 'juices', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbadff?auto=format&fit=crop&q=80&w=400' },
  { id: 12, title: 'موز بالحليب', price: '9,000', category: 'juices', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=400' },

  // Milk Shakes (Image 1)
  { id: 13, title: 'قولدن شيك الفاخر', price: '21,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 14, title: 'فانيليا ملك شيك', price: '12,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 15, title: 'شوكولاته ملك شيك', price: '14,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 16, title: 'أوريو ملك شيك', price: '12,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 17, title: 'كت كات شيك', price: '15,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1553787434-45e1d245bfbb?auto=format&fit=crop&q=80&w=400' },
  { id: 18, title: 'إسنيكرز شيك', price: '16,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1590137876181-2a5a7e34030d?auto=format&fit=crop&q=80&w=400' },
  { id: 19, title: 'باونتي شيك', price: '16,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1553787434-45e1d245bfbb?auto=format&fit=crop&q=80&w=400' },
  { id: 20, title: 'تويكس شيك', price: '16,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1553787434-45e1d245bfbb?auto=format&fit=crop&q=80&w=400' },
  { id: 21, title: 'شوكولاتة دبي شيك', price: '15,000', category: 'shakes', image: 'https://images.unsplash.com/photo-1563805042-7684c849a135?auto=format&fit=crop&q=80&w=400' },

  // Hot Drinks (Image 2 & Prompt)
  { id: 22, title: 'قهوة تركية / سودانية', price: '6,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'قهوة سودانية/تركية أصلية محضرة بعناية' },
  { id: 23, title: 'نسكافيه / كابتشينو', price: '9,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e13a?auto=format&fit=crop&q=80&w=400', description: 'مزيج القهوة الكريمي الساخن' },
  { id: 24, title: 'أوفلتين ساخن', price: '8,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'مشروب الأوفلتين الشتوي الدافئ' },
  { id: 25, title: 'هوت شوكلت', price: '8,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'شوكولاتة ساخنة غنية بالحليب' },
  { id: 26, title: 'جبنة (كبير)', price: '33,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم كبير)' },
  { id: 27, title: 'جبنة (وسط)', price: '28,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم وسط)' },
  { id: 28, title: 'جبنة (صغير)', price: '16,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم صغير)' },
  { id: 28.1, title: 'قولدن (كبير)', price: '55,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم كبير)' },
  { id: 28.2, title: 'قولدن (وسط)', price: '40,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم وسط)' },
  { id: 28.3, title: 'قولدن (صغير)', price: '24,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم صغير)' },
  { id: 29, title: 'فرنسي / كافيه لاتيه', price: '7,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8521?auto=format&fit=crop&q=80&w=400', description: 'قهوة فرنسية ناعمة' },

  // Mojito (Image 2)
  { id: 30, title: 'موهيتو قولدن الفاخر', price: '15,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 31, title: 'موهيتو باشون فروت', price: '10,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 32, title: 'موهيتو طاقة / بلو ميكس', price: '13,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=400' },
  { id: 33, title: 'موهيتو توت / فراولة', price: '10,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },

  // Soft Drinks (Image 2)
  { id: 34, title: 'بيبسي / سفن أب / كولا', price: '4,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1629203866270-f923a635776e?auto=format&fit=crop&q=80&w=400' },
  { id: 35, title: 'ريد بول / باربيكان', price: '8,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1622543953495-473ee167c454?auto=format&fit=crop&q=80&w=400' },
  { id: 36, title: 'مياه صحة نقية', price: '3,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf3d?auto=format&fit=crop&q=80&w=400' },

  // Iced Coffee (Image 4)
  { id: 37, title: 'آيس كوفي (Ice Coffee)', price: '10,000', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fac214f444?auto=format&fit=crop&q=80&w=400', description: 'قهوة مثلجة منعشة محضرة من أجود أنواع البن' },
  { id: 37.1, title: 'لاتيه (Latte)', price: '1,200', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400', description: 'لاتيه بارد كريمي وغني' },
  { id: 38, title: 'أسبانيش لاتيه (Spanish Latte)', price: '10,000', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400', description: 'لاتيه بارد مع الحليب المكثف المحلى لإضافة طعم فريد' },

  // --- FOOD (Category: food) ---
  
  // Pizza (Updated with 3 sizes)
  { id: 39.1, title: 'بيتزا قولدن (صغير)', price: '20,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة' },
  { id: 39.2, title: 'بيتزا قولدن (وسط)', price: '31,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة' },
  { id: 39.3, title: 'بيتزا قولدن (كبير)', price: '43,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة' },
  
  { id: 40.1, title: 'بيتزا مارغريتا (صغير)', price: '15,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا' },
  { id: 40.2, title: 'بيتزا مارغريتا (وسط)', price: '24,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا' },
  { id: 40.3, title: 'بيتزا مارغريتا (كبير)', price: '35,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا' },

  { id: 41.1, title: 'بيتزا هوت دوق (صغير)', price: '18,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة' },
  { id: 41.2, title: 'بيتزا هوت دوق (وسط)', price: '27,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة' },
  { id: 41.3, title: 'بيتزا هوت دوق (كبير)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة' },

  { id: 42.1, title: 'بيتزا مفرومة (صغير)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة' },
  { id: 42.2, title: 'بيتزا مفرومة (وسط)', price: '28,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة' },
  { id: 42.3, title: 'بيتزا مفرومة (كبير)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة' },

  { id: 43.1, title: 'بيتزا خضار (صغير)', price: '17,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة' },
  { id: 43.2, title: 'بيتزا خضار (وسط)', price: '26,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة' },
  { id: 43.3, title: 'بيتزا خضار (كبير)', price: '37,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة' },

  { id: 44.1, title: 'بيتزا ميكس لحوم (صغير)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي' },
  { id: 44.2, title: 'بيتزا ميكس لحوم (وسط)', price: '29,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي' },
  { id: 44.3, title: 'بيتزا ميكس لحوم (كبير)', price: '40,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي' },

  { id: 45.1, title: 'بيتزا دجاج (صغير)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة' },
  { id: 45.2, title: 'بيتزا دجاج (وسط)', price: '28,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة' },
  { id: 45.3, title: 'بيتزا دجاج (كبير)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة' },

  // --- CALZONE (Category: calzone) ---
  { id: 46, title: 'كلزوني قولدن (Golden)', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
  { id: 47, title: 'كلزوني هوت دوق (Hot dog)', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
  { id: 48, title: 'كلزوني لحمة مفرومة (Minced)', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49, title: 'كلزوني مشكل لحوم (Mixed)', price: '17,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49.1, title: 'كلزوني فراخ (Chicken)', price: '16,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49.2, title: 'كلزوني خضار (Vegetable)', price: '13,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },

  // --- FRIES (Category: fries) ---
  { id: 50.1, title: 'شيلي فرايز (صغير)', price: '6,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس مقرمشة مع خلطة الشيري الحارة والجبنة السائلة' },
  { id: 50.2, title: 'شيلي فرايز (كبير)', price: '9,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس مقرمشة مع خلطة الشيري الحارة والجبنة السائلة' },
  { id: 51.1, title: 'لافا فرايز (صغير)', price: '11,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس غارقة بصوص اللافا الساخن والجبنة ومزيج من الإضافات المميزة' },
  { id: 51.2, title: 'لافا فرايز (كبير)', price: '19,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس غارقة بصوص اللافا الساخن والجبنة ومزيج من الإضافات المميزة' },

  // --- EXTRAS (Category: extras) ---
  { id: 60.1, title: 'إضافة هلابينو (صغير)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق' },
  { id: 60.2, title: 'إضافة هلابينو (وسط)', price: '4,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق' },
  { id: 60.3, title: 'إضافة هلابينو (كبير)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق' },

  { id: 61.1, title: 'إضافة هوت دوق (صغير)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية' },
  { id: 61.2, title: 'إضافة هوت دوق (وسط)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية' },
  { id: 61.3, title: 'إضافة هوت دوق (كبير)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية' },

  { id: 62.1, title: 'إضافة فراخ (صغير)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية' },
  { id: 62.2, title: 'إضافة فراخ (وسط)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية' },
  { id: 62.3, title: 'إضافة فراخ (كبير)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية' },

  { id: 63.1, title: 'إضافة مفروم (صغير)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي' },
  { id: 63.2, title: 'إضافة مفروم (وسط)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي' },
  { id: 63.3, title: 'إضافة مفروم (كبير)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي' },

  { id: 64.1, title: 'إضافة جبنة شيدر/موزريلا (صغير)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم' },
  { id: 64.2, title: 'إضافة جبنة شيدر/موزريلا (وسط)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم' },
  { id: 64.3, title: 'إضافة جبنة شيدر/موزريلا (كبير)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم' },

  // --- ICE CREAM (Category: ice-cream) ---
  { id: 70, title: 'آيسكريم اسكوب (Scoop)', price: '3,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'أسكوب آيسكريم من اختيارك من نكهاتنا المتنوعة' },
  { id: 71, title: 'صوص شوكولاتة (Chocolate)', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=400', description: 'إضافة صوص الشوكولاتة الغني' },
  { id: 72, title: 'صوص فراولة (Strawberry)', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'إضافة صوص الفراولة الطازج' },
  { id: 73, title: 'صوص لوتس (Lotus)', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'إضافة زبدة اللوتس اللذيذة' },
  { id: 74, title: 'صوص ميكس (Mix)', price: '2,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'مزيج من الصوصات المختلفة حسب اختيارك' },

  // --- DESSERTS (Category: desserts) ---
  
  // Desserts & Ice Cream (Image 4)
  { id: 52, title: 'نوتيلا رول (شوكولاته/لوتس)', price: '15,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: 53, title: 'نوتيلا رول ميكس صوص', price: '17,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: 54, title: 'تشيز كيك فاخر', price: '16,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400' },
  { id: 55, title: 'وافل قولدن ميكس', price: '16,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1585145033838-efce1b7832be?auto=format&fit=crop&q=80&w=400' },

  // --- SHISHA (Category: shisha) ---
  { id: 80, title: 'جراك / نعناع / الوسيم / أفندينا', price: '8,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 81, title: 'سلطان (Sultan)', price: '9,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 82, title: 'إشبيلية (Ashbilia)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 83, title: 'نعناع (Mint)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 84, title: 'بطيخ (Watermelon)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 85, title: 'شمام (Cantaloupe)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 86, title: 'عنب (Grapes)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 87, title: 'شوكلاتة (Chocolate)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 88, title: 'ليمون نعناع (Lemon Mint)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 89, title: 'ايس نعناع (Mint Ice)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 90, title: 'منقة (Mango)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 91, title: 'توت (Berry)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 92, title: 'فراولة كريمة (Strawberry Cream)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 93, title: 'مستكة (Mastic)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 94, title: 'تفاح (Apple)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 95, title: 'ريد بول (Red Bull)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 96, title: 'بلو ميكس (Blue Mix)', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 97, title: 'لبان فاخر (Luxurious Gum)', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 98, title: 'لبان نعناع فاخر (Luxurious Mint Gum)', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 99, title: 'نعناع فاخر (Luxurious Mint)', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 100, title: 'ميكس فواكة (Fruit Mix)', price: '11,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 101, title: 'ميكس جراك (Jarak Mix)', price: '9,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 102, title: '3×1', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 103, title: 'لي طبي (Medical Hose)', price: '2,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' }

];

// دالة تهيئة الواجهة عند تحميل الصفحة
function init() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return; // تأكد من وجود حاوية المنيو قبل البدء

  // --- منطق الصفحة الترحيبية (Welcome Screen Logic) ---
  const welcomeScreen = document.getElementById('welcome-screen');
  const exploreBtn = document.getElementById('explore-btn');

  if (welcomeScreen && exploreBtn) {
    document.body.style.overflow = 'hidden'; // منع السكرول عند وجود صفحة الترحيب
    
    exploreBtn.addEventListener('click', () => {
      welcomeScreen.classList.add('opacity-0', 'pointer-events-none', 'scale-110');
      document.body.style.overflow = ''; // إعادة السكرول
      
      // إزالة العنصر تماماً من DOM بعد انتهاء الحركة (اختياري)
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
      }, 700);
    });
  }

  // --- منطق البحث (Search Logic) ---
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchOverlay) {
    // فتح واجهة البحث
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
      searchInput.focus();
    });

    // إغلاق واجهة البحث
    closeSearch.addEventListener('click', () => {
      searchOverlay.classList.add('opacity-0', 'pointer-events-none');
      searchInput.value = '';
      renderItems(); // إعادة عرض كافة الأصناف بعد إغلاق البحث
    });

    // استماع لعملية الإدخال في حقل البحث
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (term === '') {
        renderItems();
        return;
      }

      // تصفية المصفوفة بناءً على الاسم أو الوصف
      const searchFiltered = menuItems.filter(item => 
        item.title.toLowerCase().includes(term) || 
        (item.description && item.description.toLowerCase().includes(term))
      );
      
      renderItemsFromList(searchFiltered);
    });
  }

  // --- منطق تبديل اللغة (Language Toggle) ---
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'ar';
  
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // تبديل المتغير بين العربي والإنجليزي
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      
      // تحديث كافة النصوص التي تحتوي على سمات data-ar و data-en
      document.querySelectorAll('[data-ar]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
      });

      // تحديث نص تلميح البحث (Placeholder)
      if (searchInput) {
        searchInput.placeholder = currentLang === 'ar' ? 'مثلاً: بيتزا، عصير، آيس كريم...' : 'Example: Pizza, Juice, Ice Cream...';
      }
    });
  }

  // دالة عرض الأصناف بناءً على قائمة محددة
  function renderItemsFromList(itemsList) {
    menuGrid.innerHTML = '';
    
    // منطق تجميع الأصناف المتشابهة (للتعامل مع الأحجام المختلفة تحت بطاقة واحدة)
    const groups = [];
    const processedTitles = new Set();

    itemsList.forEach(item => {
      // استخراج الاسم الأساسي بدون الحجم المكتوب بين قوسين
      const baseTitle = item.title.split(' (')[0];
      if (processedTitles.has(baseTitle)) return;

      // العثور على جميع الأحجام لنفس الصنف
      const groupItems = itemsList.filter(mi => mi.title.startsWith(baseTitle));
      
      groups.push({
        baseTitle,
        items: groupItems,
        displayImage: groupItems[groupItems.length - 1].image,
        category: item.category
      });
      processedTitles.add(baseTitle);
    });

    // إنشاء وعرض البطاقات لكل مجموعة
    groups.forEach((group, index) => {
      const card = document.createElement('div');
      card.className = 'menu-card opacity-0 translate-y-4 transition-all duration-500 ease-out cursor-pointer';
      card.style.transitionDelay = `${index * 30}ms`;
      
      let priceDisplay = '';
      if (group.items.length > 1) {
        // ترتيب الأحجام من الأكبر سعراً إلى الأقل (أو العكس حسب الرغبة)
        const sorted = [...group.items].sort((a, b) => {
          const getPrice = (p) => parseFloat(p.replace(/,/g, ''));
          return getPrice(b.price) - getPrice(a.price);
        });

        priceDisplay = sorted.map(ri => {
          let sizeMatch = ri.title.match(/\((.*?)\)/);
          let sizeLabel = sizeMatch ? sizeMatch[1] : '';
          return `<span class="whitespace-nowrap">${sizeLabel} <span class="font-bold">${ri.price}</span></span>`;
        }).join(' <span class="mx-1 opacity-50">|</span> ');
      } else {
        // عرض السعر لصنف وحيد
        priceDisplay = `<span class="font-extrabold text-lg md:text-xl">${group.items[0].price}</span> <span class="text-[10px] font-bold uppercase opacity-70">SDG</span>`;
      }

      card.innerHTML = `
        <div class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md group border border-gray-100">
          <img src="${group.displayImage}" alt="${group.baseTitle}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-3 text-center">
            <h3 class="text-white font-bold text-sm md:text-base mb-1 leading-tight line-clamp-2">${group.baseTitle}</h3>
            <div class="text-white/90 text-[10px] md:text-xs flex flex-wrap justify-center items-center gap-y-1">
              ${priceDisplay}
            </div>
          </div>
        </div>
      `;
      
      // فتح التفاصيل عند النقر
      card.addEventListener('click', () => openProductModal(group.items[0]));
      menuGrid.appendChild(card);
      // تأثير الظهور التدريجي (Animation)
      requestAnimationFrame(() => card.classList.remove('opacity-0', 'translate-y-4'));
    });
  }

  // الدالة الرئيسية لعرض الأصناف بناءً على التصنيف المختار
  function renderItems(filter = 'all') {
    const filteredItems = filter === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === filter);
    
    renderItemsFromList(filteredItems);
  }

  // --- منطق النافذة المنبثقة (Modal Logic) ---
  const modal = document.getElementById('product-modal');
  const modalContent = modal ? modal.querySelector('.relative.w-full') : null;
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const pricesContainer = document.getElementById('modal-prices-container');

  if (!modal || !modalContent) return;

  // فتح نافذة تفاصيل المنتج
  function openProductModal(item) {
    modalImage.src = item.image;
    const baseTitle = item.title.split(' (')[0];
    modalTitle.textContent = baseTitle;
    modalDesc.textContent = item.description || 'تذوق أشهى مذاق في كافيه قولدن، مجهز خصيصاً بمكونات طازجة وجودة عالية.';

    // جلب جميع الأحجام المرتبطة بهذا الصنف لعرضها في النافذة
    const relatedItems = menuItems.filter(mi => mi.title.startsWith(baseTitle));
    pricesContainer.innerHTML = '';
    
    if (relatedItems.length > 0) {
      // ترتيب الأحجام تصاعدياً حسب السعر
      relatedItems.sort((a, b) => {
        const getPrice = (p) => parseFloat(p.replace(/,/g, ''));
        return getPrice(a.price) - getPrice(b.price);
      });

      relatedItems.forEach(ri => {
        let sizeMatch = ri.title.match(/\((.*?)\)/);
        let sizeLabel = sizeMatch ? sizeMatch[1] : (currentLang === 'ar' ? 'عادي' : 'Regular');
        
        const priceRow = document.createElement('div');
        priceRow.className = 'flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-50';
        priceRow.innerHTML = `
          <span class="text-gray-500 font-bold">${sizeLabel}</span>
          <div class="flex items-center gap-1">
            <span class="text-golden text-xs font-bold pt-1">SDG</span>
            <span class="text-black-gold text-xl font-extrabold">${ri.price}</span>
          </div>
        `;
        pricesContainer.appendChild(priceRow);
      });
    }

    // إظهار النافذة مع تأثير بسيط
    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      modalContent.classList.remove('scale-90');
      modalContent.classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden'; // منع السكرول عند فتح النافذة
  }

  // إغلاق النافذة المنبثقة
  function closeModal() {
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-90');
    setTimeout(() => {
      modal.classList.add('opacity-0', 'pointer-events-none');
    }, 200);
    document.body.style.overflow = ''; // إعادة السكرول
  }

  // إضافة مستمعات إغلاق النافذة (عند الضغط على الخلفية أو أزرار الإغلاق)
  document.querySelectorAll('.modal-close-trigger').forEach(trigger => {
    trigger.addEventListener('click', closeModal);
  });

  // إضافة مستمعات النقر لأزرار التصنيفات العلوية
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // تحديث شكل الزر المختار (نشط)
      categoryButtons.forEach(b => {
        b.classList.remove('bg-golden', 'text-white');
        b.classList.add('bg-white', 'text-gray-500');
        const ind = b.querySelector('.indicator');
        if (ind) ind.classList.add('hidden');
      });

      btn.classList.remove('bg-white', 'text-gray-500');
      btn.classList.add('bg-golden', 'text-white');
      const ind = btn.querySelector('.indicator');
      if (ind) ind.classList.remove('hidden');

      // تصفية المنيو بناءً على التصنيف المختار
      const category = btn.getAttribute('data-category');
      renderItems(category);
    });
  });

  // عرض المنيو لأول مرة (الكل)
  renderItems();
}

// بدء التشغيل عند اكتمال تحميل المستند
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
