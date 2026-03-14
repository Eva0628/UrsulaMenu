
export interface Meal {
  Lunch: string;
  Dinner: string;
}

export interface WeekMenu {
  [day: string]: Meal;
}

export interface CycleMenu {
  [weekType: string]: WeekMenu;
}

export const MENU_EN: CycleMenu = {
  "A": {
    "Monday": {"Lunch": "Pork and Black Bean, Asian Vegetables with Noodles, beans and Chili", "Dinner": "Chicken Carbonara, Vegetable Biryani"},
    "Tuesday": {"Lunch": "Swedish Meatballs, Vegetarian Ratauille", "Dinner": "Chicken Biryani, Mexican Potatoes"},
    "Wednesday": {"Lunch": "Sausage Sizzle, Mushrooms and Onions", "Dinner": "Sweet and Sour Fish, Cheesy Cauliflower and Brocolli Bake"},
    "Thursday": {"Lunch": "Massaman Lamb Curry, Harissa Chickpea Curry", "Dinner": "Char Sui Pork, Tofu and Vegetable Stir Fry"},
    "Friday": {"Lunch": "Laksa (Chicken, Seafood, Vegetarian, Vegan)", "Dinner": "Italian Meatballs with Penne, Roasted Balsamic Vegetables"},
    "Saturday": {"Lunch": "Beef / Vegie Burgers", "Dinner": "Glazed Asian Chicken, Stir Fried Vegetables with Noodles"},
    "Sunday": {"Lunch": "Beef Lasagne, Vegetarian Lasagne", "Dinner": "Tandoori Lamb, Seasonal Roasted Vegetables"}
  },
  "B": {
    "Monday": {"Lunch": "Chicken Coconut Curry, Thai Style Vegetables", "Dinner": "Roast Turkey, Broccoli Couscous"},
    "Tuesday": {"Lunch": "Devil Chicken Wings, Vegetarian Singapore Noodles", "Dinner": "Lamb Ragout, Roasted Vegetables"},
    "Wednesday": {"Lunch": "Curried Fish, Pasta Sour Cream Sauce", "Dinner": "Chicken Masala, Cauliflower Aloo Gobi"},
    "Thursday": {"Lunch": "Spiced Pork Belly, Roasted Vegetable Ragout", "Dinner": "Minute Steaks, Vegetable Lasagne"},
    "Friday": {"Lunch": "Chicken Schnitzel, Falafel and Vegatable Ragu", "Dinner": "Chilli Con Carne, Vegetarian Con Carne"},
    "Saturday": {"Lunch": "Korean Sizzling Lamb, Sweet Potato Curry", "Dinner": "Spicy Chicken Drumsticks, Vegetarian Pad Thai"},
    "Sunday": {"Lunch": "Lemon Chicken, Eggplant with Kidney Beans", "Dinner": "Slow Cooked Beef, Vegetables and Noodles"}
  },
  "C": {
    "Monday": {"Lunch": "Garlic Herbed Chicken, Braised Mushroom and Tofu", "Dinner": "Butter Chicken, Chickpea Tagine"},
    "Tuesday": {"Lunch": "Fish and Chips, Chilli Eggplant Rigatoni", "Dinner": "Lamb Shepards Pie, Vegetable Tofu Chilli"},
    "Wednesday": {"Lunch": "Spaghetti Bolognaise (Beef or Vegetarian)", "Dinner": "Sirracha Chicken, Vegetable Parmigania"},
    "Thursday": {"Lunch": "Tuscan Chicken, Roasted Vegetable Ragu", "Dinner": "Massaman Lamb Curry, Chlli Beans"},
    "Friday": {"Lunch": "Slab Pizza", "Dinner": "BBQ Spiced Chicken Wings, Eggplant with Kidney Beans"},
    "Saturday": {"Lunch": "Satay Beef Stirfry, Tofu and Vegetable Stirfry", "Dinner": "Five Spiced Pork, Dhal"},
    "Sunday": {"Lunch": "Kungpau Chicken, Pumpkin Curry", "Dinner": "Slow Cooked Beef, Vegetables and Noodles"}
  }
};

export const MENU_ZH: CycleMenu = {
  "A": {
    "Monday": {"Lunch": "猪肉配黑豆、亚洲蔬菜配面条、豆类及辣椒", "Dinner": "鸡肉培根奶油意面、蔬菜印度香饭"},
    "Tuesday": {"Lunch": "瑞典肉丸、素食炖菜", "Dinner": "鸡肉印度香饭、墨西哥风味土豆"},
    "Wednesday": {"Lunch": "香肠烤盘、蘑菇及洋葱", "Dinner": "糖醋鱼、芝士花菜与西兰花烤盘"},
    "Thursday": {"Lunch": "玛莎曼羊肉咖喱、哈里萨辣酱鹰嘴豆咖喱", "Dinner": "叉烧猪肉、豆腐与蔬菜炒菜"},
    "Friday": {"Lunch": "叻沙 (鸡肉、海鲜、素食、纯素)", "Dinner": "意大利肉丸配通心粉、烤香醋蔬菜"},
    "Saturday": {"Lunch": "牛肉/素食汉堡", "Dinner": "亚洲风味烤鸡、炒蔬菜配面条"},
    "Sunday": {"Lunch": "牛肉千层饼、素食千层饼", "Dinner": "坦都里烤羊肉、时令烤蔬菜"}
  },
  "B": {
    "Monday": {"Lunch": "泰式椰汁鸡肉咖喱、泰式蔬菜", "Dinner": "烤火鸡、西兰花古斯米"},
    "Tuesday": {"Lunch": "魔鬼鸡翅、素食新加坡炒米粉", "Dinner": "羊肉炖菜、烤蔬菜"},
    "Wednesday": {"Lunch": "咖喱鱼、奶油酱意面", "Dinner": "玛莎拉鸡肉、花菜土豆泥咖喱"},
    "Thursday": {"Lunch": "香料五花肉、烤蔬菜杂烩", "Dinner": "分钟牛排、蔬菜千层饼"},
    "Friday": {"Lunch": "炸鸡排、炸鹰嘴豆饼与蔬菜杂烩", "Dinner": "墨西哥辣肉酱、素食辣肉酱"},
    "Saturday": {"Lunch": "韩式滋滋羊肉、红薯咖喱", "Dinner": "香辣鸡腿、素食泰式炒河粉"},
    "Sunday": {"Lunch": "柠檬鸡、茄子配红腰豆", "Dinner": "慢炖牛肉、蔬菜与面条"}
  },
  "C": {
    "Monday": {"Lunch": "蒜香药草鸡、炖蘑菇与豆腐", "Dinner": "黄油鸡、鹰嘴豆塔吉锅"},
    "Tuesday": {"Lunch": "炸鱼薯条、辣椒茄子管面", "Dinner": "羊肉牧羊人派、蔬菜豆腐辣酱"},
    "Wednesday": {"Lunch": "意大利肉酱面 (牛肉或素食)", "Dinner": "是拉差辣酱鸡肉、蔬菜帕尔马干酪烤菜"},
    "Thursday": {"Lunch": "托斯卡纳风味鸡肉、烤蔬菜杂烩", "Dinner": "玛莎曼羊肉咖喱、辣椒豆"},
    "Friday": {"Lunch": "大板披萨", "Dinner": "烧烤风味鸡翅、茄子配红腰豆"},
    "Saturday": {"Lunch": "沙爹牛肉炒菜、豆腐与蔬菜炒菜", "Dinner": "五香猪肉、印度达尔咖喱"},
    "Sunday": {"Lunch": "宫保鸡丁、南瓜咖喱", "Dinner": "慢炖牛肉、蔬菜与面条"}
  }
};

export const CYCLE_START_DATE = new Date('2026-02-16');

export function getWeekType(targetDate: Date): string {
  // Normalize dates to midnight to avoid DST issues
  const start = new Date(CYCLE_START_DATE);
  start.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'A'; // Or handle pre-cycle dates

  const diffWeeks = Math.floor(diffDays / 7);
  const weekMap = ['A', 'B', 'C'];
  return weekMap[diffWeeks % 3];
}

export const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const DAYS_OF_WEEK_ZH = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
