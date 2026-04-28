
// استيراد ملف التنسيق الأساسي (Tailwind CSS)
import './index.css';
import { IMAGES } from './images.js';

// قائمة أصناف المنيو - تحتوي على كافة البيانات (الاسم، السعر، التصنيف، الصورة، والوصف)
const menuItems = [
  // --- المشروبات (Drinks) ---
  
  // العصائر الطبيعية (Fresh Juices)
  { id: 1, title: 'عصير قولدن', title_en: 'Golden Juice', price: '13,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 2, title: 'ليمون بالنعناع', title_en: 'Lemon Mint', price: '7,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 3, title: 'ليمون بالحليب', title_en: 'Lemon Milk', price: '9,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 4, title: 'عصير فراولة', title_en: 'Strawberry Juice', price: '9,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 5, title: 'فراولة بالحليب', title_en: 'Strawberry Milk', price: '10,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 6, title: 'عصير منقة', title_en: 'Mango Juice', price: '9,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 7, title: 'منقة بالحليب', title_en: 'Mango Milk', price: '10,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 8, title: 'عصير برتقال', title_en: 'Orange Juice', price: '7,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 9, title: 'عصير أناناس', title_en: 'Pineapple Juice', price: '7,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 10, title: 'عصير قريب فروت', title_en: 'Grapefruit Juice', price: '7,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 11, title: 'كوكتيل مشكل', title_en: 'Mixed Cocktail', price: '11,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },
  { id: 12, title: 'موز بالحليب', title_en: 'Banana Milk', price: '9,000', category: 'juices', image: IMAGES.CATEGORIES.JUICES },

  // Milk Shakes (Image 1)
  { id: 13, title: 'قولدن شيك الفاخر', title_en: 'Golden Luxury Shake', price: '21,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 14, title: 'فانيليا ملك شيك', title_en: 'Vanilla Milkshake', price: '12,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 15, title: 'شوكولاته ملك شيك', title_en: 'Chocolate Milkshake', price: '14,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 16, title: 'أوريو ملك شيك', title_en: 'Oreo Milkshake', price: '12,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 17, title: 'كت كات شيك', title_en: 'KitKat Shake', price: '15,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 18, title: 'إسنيكرز شيك', title_en: 'Snickers Shake', price: '16,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 19, title: 'باونتي شيك', title_en: 'Bounty Shake', price: '16,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 20, title: 'تويكس شيك', title_en: 'Twix Shake', price: '16,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },
  { id: 21, title: 'شوكولاتة دبي شيك', title_en: 'Dubai Chocolate Shake', price: '15,000', category: 'shakes', image: IMAGES.CATEGORIES.SHAKES },

  // Hot Drinks (Image 2 & Prompt)
  { id: 22, title: 'قهوة تركية / سودانية', title_en: 'Turkish / Sudanese Coffee', price: '6,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'قهوة سودانية/تركية أصلية محضرة بعناية', description_en: 'Authentic Sudanese/Turkish coffee prepared with care' },
  { id: 23, title: 'نسكافيه / كابتشينو', title_en: 'Nescafe / Cappuccino', price: '9,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e13a?auto=format&fit=crop&q=80&w=400', description: 'مزيج القهوة الكريمي الساخن', description_en: 'Creamy hot coffee blend' },
  { id: 24, title: 'أوفلتين ساخن', title_en: 'Hot Ovaltine', price: '8,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'مشروب الأوفلتين الشتوي الدافئ', description_en: 'Warm winter Ovaltine drink' },
  { id: 25, title: 'هوت شوكلت', title_en: 'Hot Chocolate', price: '8,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1544787210-2211dca21614?auto=format&fit=crop&q=80&w=400', description: 'شوكولاتة ساخنة غنية بالحليب', description_en: 'Rich hot chocolate with milk' },
  { id: 26, title: 'جبنة (كبير)', title_en: 'Jabana (Large)', price: '33,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم كبير)', description_en: 'Traditional Sudanese coffee (Large size)' },
  { id: 27, title: 'جبنة (وسط)', title_en: 'Jabana (Medium)', price: '28,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم وسط)', description_en: 'Traditional Sudanese coffee (Medium size)' },
  { id: 28, title: 'جبنة (صغير)', title_en: 'Jabana (Small)', price: '16,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة سودانية تقليدية (حجم صغير)', description_en: 'Traditional Sudanese coffee (Small size)' },
  { id: 28.1, title: 'قولدن (كبير)', title_en: 'Golden Coffee (Large)', price: '55,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم كبير)', description_en: 'Premium Golden coffee (Large size)' },
  { id: 28.2, title: 'قولدن (وسط)', title_en: 'Golden Coffee (Medium)', price: '40,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم وسط)', description_en: 'Premium Golden coffee (Medium size)' },
  { id: 28.3, title: 'قولدن (صغير)', title_en: 'Golden Coffee (Small)', price: '24,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b18?auto=format&fit=crop&q=80&w=400', description: 'جبنة قولدن الفاخرة (حجم صغير)', description_en: 'Premium Golden coffee (Small size)' },
  { id: 29, title: 'فرنسي / كافيه لاتيه', title_en: 'French / Cafe Latte', price: '7,000', category: 'coffee', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8521?auto=format&fit=crop&q=80&w=400', description: 'قهوة فرنسية ناعمة', description_en: 'Smooth French coffee' },

  // Mojito (Image 2)
  { id: 30, title: 'موهيتو قولدن الفاخر', title_en: 'Premium Golden Mojito', price: '15,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 31, title: 'موهيتو باشون فروت', title_en: 'Passion Fruit Mojito', price: '10,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 32, title: 'موهيتو طاقة / بلو ميكس', title_en: 'Energy Mojito / Blue Mix', price: '13,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=400' },
  { id: 33, title: 'موهيتو توت / فراولة', title_en: 'Berry / Strawberry Mojito', price: '10,000', category: 'mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },

  // Soft Drinks (Image 2)
  { id: 34, title: 'بيبسي / سفن أب / كولا', title_en: 'Pepsi / 7Up / Cola', price: '4,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1629203866270-f923a635776e?auto=format&fit=crop&q=80&w=400' },
  { id: 35, title: 'ريد بول / باربيكان', title_en: 'Red Bull / Barbican', price: '8,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1622543953495-473ee167c454?auto=format&fit=crop&q=80&w=400' },
  { id: 36, title: 'مياه صحة نقية', title_en: 'Pure Health Water', price: '3,000', category: 'soft-drinks', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf3d?auto=format&fit=crop&q=80&w=400' },

  // Iced Coffee (Image 4)
  { id: 37, title: 'آيس كوفي (Ice Coffee)', title_en: 'Iced Coffee', price: '10,000', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fac214f444?auto=format&fit=crop&q=80&w=400', description: 'قهوة مثلجة منعشة محضرة من أجود أنواع البن', description_en: 'Refreshing iced coffee made from the finest beans' },
  { id: 37.1, title: 'لاتيه (Latte)', title_en: 'Iced Latte', price: '1,200', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400', description: 'لاتيه بارد كريمي وغني', description_en: 'Rich and creamy cold latte' },
  { id: 38, title: 'أسبانيش لاتيه (Spanish Latte)', title_en: 'Spanish Latte', price: '10,000', category: 'iced-coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400', description: 'لاتيه بارد مع الحليب المكثف المحلى لإضافة طعم فريد', description_en: 'Cold latte with sweetened condensed milk for a unique taste' },

  // --- FOOD (Category: food) ---
  
  // Pizza (Updated with 3 sizes)
  { id: 39.1, title: 'بيتزا قولدن (صغير)', title_en: 'Golden Pizza (Small)', price: '20,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة', description_en: 'Our special Golden Pizza with secret ingredients and premium cheese' },
  { id: 39.2, title: 'بيتزا قولدن (وسط)', title_en: 'Golden Pizza (Medium)', price: '31,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة', description_en: 'Our special Golden Pizza with secret ingredients and premium cheese' },
  { id: 39.3, title: 'بيتزا قولدن (كبير)', title_en: 'Golden Pizza (Large)', price: '43,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا قولدن الخاصة بمكوناتنا السرية الغنية بالطعم والجبنة الفاخرة', description_en: 'Our special Golden Pizza with secret ingredients and premium cheese' },
  
  { id: 40.1, title: 'بيتزا مارغريتا (صغير)', title_en: 'Margherita Pizza (Small)', price: '15,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا', description_en: 'Classic pizza with Italian tomato sauce, basil, and mozzarella cheese' },
  { id: 40.2, title: 'بيتزا مارغريتا (وسط)', title_en: 'Margherita Pizza (Medium)', price: '24,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا', description_en: 'Classic pizza with Italian tomato sauce, basil, and mozzarella cheese' },
  { id: 40.3, title: 'بيتزا مارغريتا (كبير)', title_en: 'Margherita Pizza (Large)', price: '35,000', category: 'food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400', description: 'البيتزا الكلاسيكية بصلصة الطماطم الإيطالية والريحان وجبنة الموزاريلا', description_en: 'Classic pizza with Italian tomato sauce, basil, and mozzarella cheese' },

  { id: 41.1, title: 'بيتزا هوت دوق (صغير)', title_en: 'Hot Dog Pizza (Small)', price: '18,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة', description_en: 'Delicious hot dog pieces with mixed vegetables and special sauce' },
  { id: 41.2, title: 'بيتزا هوت دوق (وسط)', title_en: 'Hot Dog Pizza (Medium)', price: '27,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة', description_en: 'Delicious hot dog pieces with mixed vegetables and special sauce' },
  { id: 41.3, title: 'بيتزا هوت دوق (كبير)', title_en: 'Hot Dog Pizza (Large)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'قطع الهوت دوق اللذيذة مع الخضار المشكلة والصلصة المميزة', description_en: 'Delicious hot dog pieces with mixed vegetables and special sauce' },

  { id: 42.1, title: 'بيتزا مفرومة (صغير)', title_en: 'Minced Meat Pizza (Small)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة', description_en: 'Fresh minced meat with special spice mix and cheese' },
  { id: 42.2, title: 'بيتزا مفرومة (وسط)', title_en: 'Minced Meat Pizza (Medium)', price: '28,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة', description_en: 'Fresh minced meat with special spice mix and cheese' },
  { id: 42.3, title: 'بيتزا مفرومة (كبير)', title_en: 'Minced Meat Pizza (Large)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'اللحم المفروم الطازج مع خلطة البهارات الخاصة والجبنة', description_en: 'Fresh minced meat with special spice mix and cheese' },

  { id: 43.1, title: 'بيتزا خضار (صغير)', title_en: 'Vegetable Pizza (Small)', price: '17,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة', description_en: 'Fresh mix of vegetables (peppers, olives, mushrooms, corn) with cheese' },
  { id: 43.2, title: 'بيتزا خضار (وسط)', title_en: 'Vegetable Pizza (Medium)', price: '26,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة', description_en: 'Fresh mix of vegetables (peppers, olives, mushrooms, corn) with cheese' },
  { id: 43.3, title: 'بيتزا خضار (كبير)', title_en: 'Vegetable Pizza (Large)', price: '37,000', category: 'food', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400', description: 'مزيج طازج من الخضروات (فلفل، زيتون، فطر، ذرة) مع الجبنة', description_en: 'Fresh mix of vegetables (peppers, olives, mushrooms, corn) with cheese' },

  { id: 44.1, title: 'بيتزا ميكس لحوم (صغير)', title_en: 'Meat Mix Pizza (Small)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي', description_en: 'Pizza rich with a premium selection of different meats for strong flavor lovers' },
  { id: 44.2, title: 'بيتزا ميكس لحوم (وسط)', title_en: 'Meat Mix Pizza (Medium)', price: '29,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي', description_en: 'Pizza rich with a premium selection of different meats for strong flavor lovers' },
  { id: 44.3, title: 'بيتزا ميكس لحوم (كبير)', title_en: 'Meat Mix Pizza (Large)', price: '40,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'بيتزا غنية بتشكيلة فاخرة من اللحوم المختلفة لمحبي الطعم القوي', description_en: 'Pizza rich with a premium selection of different meats for strong flavor lovers' },

  { id: 45.1, title: 'بيتزا دجاج (صغير)', title_en: 'Chicken Pizza (Small)', price: '19,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة', description_en: 'Marinated chicken pieces with mayo sauce, cheese, and fresh vegetables' },
  { id: 45.2, title: 'بيتزا دجاج (وسط)', title_en: 'Chicken Pizza (Medium)', price: '28,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة', description_en: 'Marinated chicken pieces with mayo sauce, cheese, and fresh vegetables' },
  { id: 45.3, title: 'بيتزا دجاج (كبير)', title_en: 'Chicken Pizza (Large)', price: '39,000', category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'قطع الدجاج المتبلة مع صوص المايونيز والجبنة والخضار الطازجة', description_en: 'Marinated chicken pieces with mayo sauce, cheese, and fresh vegetables' },

  // --- CALZONE (Category: calzone) ---
  { id: 46, title: 'كلزوني قولدن (Golden)', title_en: 'Golden Calzone', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
  { id: 47, title: 'كلزوني هوت دوق (Hot dog)', title_en: 'Hot Dog Calzone', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
  { id: 48, title: 'كلزوني لحمة مفرومة (Minced)', title_en: 'Minced Meat Calzone', price: '15,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49, title: 'كلزوني مشكل لحوم (Mixed)', title_en: 'Mixed Meat Calzone', price: '17,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49.1, title: 'كلزوني فراخ (Chicken)', title_en: 'Chicken Calzone', price: '16,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400' },
  { id: 49.2, title: 'كلزوني خضار (Vegetable)', title_en: 'Vegetable Calzone', price: '13,000', category: 'calzone', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },

  // --- FRIES (Category: fries) ---
  { id: 50.1, title: 'شيلي فرايز (صغير)', title_en: 'Chili Fries (Small)', price: '6,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس مقرمشة مع خلطة الشيري الحارة والجبنة السائلة', description_en: 'Crispy fries with hot chili mix and melted cheese' },
  { id: 50.2, title: 'شيلي فرايز (كبير)', title_en: 'Chili Fries (Large)', price: '9,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس مقرمشة مع خلطة الشيري الحارة والجبنة السائلة', description_en: 'Crispy fries with hot chili mix and melted cheese' },
  { id: 51.1, title: 'لافا فرايز (صغير)', title_en: 'Lava Fries (Small)', price: '11,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس غارقة بصوص اللافا الساخن والجبنة ومزيج من الإضافات المميزة', description_en: 'Fries drenched in hot lava sauce and cheese with a mix of special toppings' },
  { id: 51.2, title: 'لافا فرايز (كبير)', title_en: 'Lava Fries (Large)', price: '19,000', category: 'fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400', description: 'بطاطس غارقة بصوص اللافا الساخن والجبنة ومزيج من الإضافات المميزة', description_en: 'Fries drenched in hot lava sauce and cheese with a mix of special toppings' },

  // --- EXTRAS (Category: extras) ---
  { id: 60.1, title: 'إضافة هلابينو (صغير)', title_en: 'Extra Jalapeño (Small)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق', description_en: 'Add hot jalapeño peppers for extra flavor' },
  { id: 60.2, title: 'إضافة هلابينو (وسط)', title_en: 'Extra Jalapeño (Medium)', price: '4,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق', description_en: 'Add hot jalapeño peppers for extra flavor' },
  { id: 60.3, title: 'إضافة هلابينو (كبير)', title_en: 'Extra Jalapeño (Large)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1594411130691-38e6e58e3ca2?auto=format&fit=crop&q=80&w=400', description: 'إضافة فلفل هلابينو حار لتعزيز المذاق', description_en: 'Add hot jalapeño peppers for extra flavor' },

  { id: 61.1, title: 'إضافة هوت دوق (صغير)', title_en: 'Extra Hot Dog (Small)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية', description_en: 'Add extra hot dog pieces' },
  { id: 61.2, title: 'إضافة هوت دوق (وسط)', title_en: 'Extra Hot Dog (Medium)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية', description_en: 'Add extra hot dog pieces' },
  { id: 61.3, title: 'إضافة هوت دوق (كبير)', title_en: 'Extra Hot Dog (Large)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع هوت دوق إضافية', description_en: 'Add extra hot dog pieces' },

  { id: 62.1, title: 'إضافة فراخ (صغير)', title_en: 'Extra Chicken (Small)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية', description_en: 'Add extra marinated chicken pieces' },
  { id: 62.2, title: 'إضافة فراخ (وسط)', title_en: 'Extra Chicken (Medium)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية', description_en: 'Add extra marinated chicken pieces' },
  { id: 62.3, title: 'إضافة فراخ (كبير)', title_en: 'Extra Chicken (Large)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة قطع دجاج متبلة إضافية', description_en: 'Add extra marinated chicken pieces' },

  { id: 63.1, title: 'إضافة مفروم (صغير)', title_en: 'Extra Minced Meat (Small)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي', description_en: 'Add extra minced meat' },
  { id: 63.2, title: 'إضافة مفروم (وسط)', title_en: 'Extra Minced Meat (Medium)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي', description_en: 'Add extra minced meat' },
  { id: 63.3, title: 'إضافة مفروم (كبير)', title_en: 'Extra Minced Meat (Large)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', description: 'إضافة لحم مفروم إضافي', description_en: 'Add extra minced meat' },

  { id: 64.1, title: 'إضافة جبنة شيدر/موزريلا (صغير)', title_en: 'Extra Cheddar/Mozzarella (Small)', price: '3,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم', description_en: 'Add extra cheddar or mozzarella cheese for more flavor' },
  { id: 64.2, title: 'إضافة جبنة شيدر/موزريلا (وسط)', title_en: 'Extra Cheddar/Mozzarella (Medium)', price: '5,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم', description_en: 'Add extra cheddar or mozzarella cheese for more flavor' },
  { id: 64.3, title: 'إضافة جبنة شيدر/موزريلا (كبير)', title_en: 'Extra Cheddar/Mozzarella (Large)', price: '7,000', category: 'extras', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'إضافة جبنة شيدر أو موزريلا إضافية لمزيد من الطعم', description_en: 'Add extra cheddar or mozzarella cheese for more flavor' },

  // --- ICE CREAM (Category: ice-cream) ---
  { id: 70, title: 'آيسكريم اسكوب (Scoop)', title_en: 'Ice Cream Scoop', price: '3,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'أسكوب آيسكريم من اختيارك من نكهاتنا المتنوعة', description_en: 'A scoop of ice cream from your choice of our various flavors' },
  { id: 71, title: 'صوص شوكولاتة (Chocolate)', title_en: 'Chocolate Sauce', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=400', description: 'إضافة صوص الشوكولاتة الغني', description_en: 'Add rich chocolate sauce' },
  { id: 72, title: 'صوص فراولة (Strawberry)', title_en: 'Strawberry Sauce', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'إضافة صوص الفراولة الطازج', description_en: 'Add fresh strawberry sauce' },
  { id: 73, title: 'صوص لوتس (Lotus)', title_en: 'Lotus Sauce', price: '1,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'إضافة زبدة اللوتس اللذيذة', description_en: 'Add delicious Lotus butter' },
  { id: 74, title: 'صوص ميكس (Mix)', title_en: 'Mix Sauce', price: '2,000', category: 'ice-cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400', description: 'مزيج من الصوصات المختلفة حسب اختيارك', description_en: 'A mix of different sauces of your choice' },

  // --- DESSERTS (Category: desserts) ---
  
  // Desserts & Ice Cream (Image 4)
  { id: 52, title: 'نوتيلا رول (شوكولاته/لوتس)', title_en: 'Nutella Roll (Chocolate/Lotus)', price: '15,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: 53, title: 'نوتيلا رول ميكس صوص', title_en: 'Nutella Roll Mix Sauce', price: '17,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { id: 54, title: 'تشيز كيك فاخر', title_en: 'Premium Cheesecake', price: '16,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400' },
  { id: 55, title: 'وافل قولدن ميكس', title_en: 'Golden Mix Waffle', price: '16,000', category: 'desserts', image: 'https://images.unsplash.com/photo-1585145033838-efce1b7832be?auto=format&fit=crop&q=80&w=400' },

  // --- SHISHA (Category: shisha) ---
  { id: 80, title: 'جراك / نعناع / الوسيم / أفندينا', title_en: 'Jurak / Mint / Al-Waseem / Afandina', price: '8,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 81, title: 'سلطان (Sultan)', title_en: 'Sultan', price: '9,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 82, title: 'إشبيلية (Ashbilia)', title_en: 'Ashbilia', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 83, title: 'نعناع (Mint)', title_en: 'Mint', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 84, title: 'بطيخ (Watermelon)', title_en: 'Watermelon', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 85, title: 'شمام (Cantaloupe)', title_en: 'Cantaloupe', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 86, title: 'عنب (Grapes)', title_en: 'Grapes', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 87, title: 'شوكلاتة (Chocolate)', title_en: 'Chocolate', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 88, title: 'ليمون نعناع (Lemon Mint)', title_en: 'Lemon Mint', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 89, title: 'ايس نعناع (Mint Ice)', title_en: 'Mint Ice', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 90, title: 'منقة (Mango)', title_en: 'Mango', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 91, title: 'توت (Berry)', title_en: 'Berry', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 92, title: 'فراولة كريمة (Strawberry Cream)', title_en: 'Strawberry Cream', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 93, title: 'مستكة (Mastic)', title_en: 'Mastic', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 94, title: 'تفاح (Apple)', title_en: 'Apple', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 95, title: 'ريد بول (Red Bull)', title_en: 'Red Bull', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 96, title: 'بلو ميكس (Blue Mix)', title_en: 'Blue Mix', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 97, title: 'لبان فاخر (Luxurious Gum)', title_en: 'Luxurious Gum', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 98, title: 'لبان نعناع فاخر (Luxurious Mint Gum)', title_en: 'Luxurious Mint Gum', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 99, title: 'نعناع فاخر (Luxurious Mint)', title_en: 'Luxurious Mint', price: '12,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 100, title: 'ميكس فواكة (Fruit Mix)', title_en: 'Fruit Mix', price: '11,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 101, title: 'ميكس جراك (Jarak Mix)', title_en: 'Jarak Mix', price: '9,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 102, title: '3×1', title_en: '3×1', price: '10,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' },
  { id: 103, title: 'لي طبي (Medical Hose)', title_en: 'Medical Hose', price: '2,000', category: 'shisha', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=400' }

];

// دالة تهيئة الواجهة عند تحميل الصفحة
function init() {
  // ضبط صور الخلفيات من ملف الإعدادات
  const welcomeBg = document.getElementById('welcome-bg');
  const heroBg = document.getElementById('hero-bg');
  if (welcomeBg) welcomeBg.src = IMAGES.WELCOME_BG;
  if (heroBg) heroBg.src = IMAGES.HERO_BG;

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
      const searchFiltered = menuItems.filter(item => {
        const title = currentLang === 'ar' ? item.title : (item.title_en || item.title);
        const desc = currentLang === 'ar' ? (item.description || '') : (item.description_en || item.description || '');
        return title.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
      });
      
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

      // إعادة عرض المنيو باللغة الجديدة
      const activeBtn = document.querySelector('.category-btn.bg-golden');
      const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
      renderItems(category);
    });
  }

  // دالة عرض الأصناف بناءً على قائمة محددة
  function renderItemsFromList(itemsList) {
    menuGrid.innerHTML = '';
    
    // منطق تجميع الأصناف المتشابهة (للتعامل مع الأحجام المختلفة تحت بطاقة واحدة)
    const groups = [];
    const processedTitles = new Set();

    itemsList.forEach(item => {
      // اختيار العنوان بناءً على اللغة
      const itemTitle = currentLang === 'ar' ? item.title : (item.title_en || item.title);
      // استخراج الاسم الأساسي بدون الحجم المكتوب بين قوسين
      const baseTitle = itemTitle.split(' (')[0];
      
      if (processedTitles.has(baseTitle)) return;

      // العثور على جميع الأحجام لنفس الصنف
      const groupItems = itemsList.filter(mi => {
        const miTitle = currentLang === 'ar' ? mi.title : (mi.title_en || mi.title);
        return miTitle.startsWith(baseTitle);
      });
      
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
          const riTitle = currentLang === 'ar' ? ri.title : (ri.title_en || ri.title);
          let sizeMatch = riTitle.match(/\((.*?)\)/);
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
    
    const itemTitle = currentLang === 'ar' ? item.title : (item.title_en || item.title);
    const baseTitle = itemTitle.split(' (')[0];
    modalTitle.textContent = baseTitle;
    
    const description = currentLang === 'ar' ? (item.description || 'تذوق أشهى مذاق في كافيه قولدن، مجهز خصيصاً بمكونات طازجة وجودة عالية.') : (item.description_en || 'Taste the most delicious flavors at Golden Cafe, specially prepared with fresh ingredients and high quality.');
    modalDesc.textContent = description;

    // جلب جميع الأحجام المرتبطة بهذا الصنف لعرضها في النافذة
    const relatedItems = menuItems.filter(mi => {
      const miTitle = currentLang === 'ar' ? mi.title : (mi.title_en || mi.title);
      return miTitle.startsWith(baseTitle);
    });
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
