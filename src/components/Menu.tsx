import { useState } from 'react';
import '../styles/Menu.css';

interface MenuEntry {
  name: string;
  nameJa: string;
  description: string;
  price: string;
}

interface MenuItem {
  category: string;
  label: string;
  summary: string;
  items: MenuEntry[];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('curries');

  const menuItems: MenuItem[] = [
    {
      category: 'curries',
      label: 'Curry カレー',
      summary: 'Curry boards from the photographed menu, including chicken, mutton, paneer, seafood, vegetable, and takeout curry selections.',
      items: [
        { name: 'Chicken Curry', nameJa: 'チキンカレー', description: 'Classic chicken curry.', price: '¥760' },
        { name: 'Butter Chicken Curry', nameJa: 'バターチキンカレー', description: 'Creamy butter chicken curry.', price: '¥900' },
        { name: 'Chicken Korma', nameJa: 'チキンコルマ', description: 'Mild korma-style chicken curry.', price: '¥890' },
        { name: 'Sag Chicken', nameJa: 'ほうれん草チキン', description: 'Chicken curry with spinach.', price: '¥870' },
        { name: 'Chicken Dupijya', nameJa: 'チキンドピアザ', description: 'Chicken curry with onion-rich gravy.', price: '¥840' },
        { name: 'Chicken Keema', nameJa: 'チキンキーマ', description: 'Minced chicken curry.', price: '¥850' },
        { name: 'Mutton Curry', nameJa: 'マトンカレー', description: 'Mutton curry with rich seasoning.', price: '¥885' },
        { name: 'Sag Mutton', nameJa: 'ほうれん草マトン', description: 'Mutton and spinach curry.', price: '¥930' },
        { name: 'Mutton Masala', nameJa: 'マトンマサラ', description: 'Spiced masala mutton curry.', price: '¥940' },
        { name: 'Mutton Chilli', nameJa: 'マトンチリ', description: 'Chilli-finished mutton curry.', price: '¥940' },
        { name: 'Pork Curry', nameJa: 'ポークカレー', description: 'Slow-cooked pork curry.', price: '¥890' },
        { name: 'Sag Paneer', nameJa: 'ほうれん草パニール', description: 'Spinach and paneer curry.', price: '¥850' },
        { name: 'Paneer Makhani', nameJa: 'パニールマカニ', description: 'Creamy paneer curry.', price: '¥890' },
        { name: 'Dal Curry', nameJa: 'ダルカレー', description: 'Lentil curry.', price: '¥730' },
        { name: 'Vegetable Curry', nameJa: 'ベジタブルカレー', description: 'Mixed vegetable curry.', price: '¥800' },
        { name: 'Mix Vegetable', nameJa: 'ミックス野菜', description: 'Seasonal vegetable curry.', price: '¥790' },
        { name: 'Alu Gobi', nameJa: 'アルゴービ', description: 'Potato and cauliflower curry.', price: '¥810' },
        { name: 'Seafood Curry', nameJa: 'シーフードカレー', description: 'Seafood curry.', price: '¥850' },
        { name: 'Mix Seafood', nameJa: 'ミックスシーフード', description: 'Mixed seafood curry.', price: '¥940' },
        { name: 'Prawn Masala', nameJa: '海老マサラ', description: 'Prawn masala curry.', price: '¥895' }
      ]
    },
    {
      category: 'lunch',
      label: 'Lunch ランチ',
      summary: 'Lunch set board with the printed curry selections and their set prices.',
      items: [
        { name: "Today's Curry", nameJa: '日替わりカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥750' },
        { name: 'Chicken Curry', nameJa: 'チキンカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥750' },
        { name: 'Vegetable Curry', nameJa: 'ベジタブルカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥800' },
        { name: 'Dal Curry', nameJa: 'ダルカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥750' },
        { name: 'Keema Curry', nameJa: 'キーマカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥850' },
        { name: 'Butter Chicken Curry', nameJa: 'バターチキンカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥900' },
        { name: 'Mutton Curry', nameJa: 'マトン（羊肉）カレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥850' },
        { name: 'Sag Chicken', nameJa: 'ほうれん草チキン', description: '1 curry + naan or rice + salad + soft drink.', price: '¥850' },
        { name: 'Sag Paneer', nameJa: 'ほうれん草パニール', description: '1 curry + naan or rice + salad + soft drink.', price: '¥850' },
        { name: 'Seafood Curry', nameJa: 'シーフードカレー', description: '1 curry + naan or rice + salad + soft drink.', price: '¥850' },
        { name: 'Sag Mutton', nameJa: 'ほうれん草マトン', description: '1 curry + naan or rice + salad + soft drink.', price: '¥900' },
        { name: '2 Curry Set', nameJa: '2種類カレーセット', description: '2 curries + naan or rice + salad + soft drink.', price: '¥1,040' },
        { name: 'Tikka Set', nameJa: 'ティッカセット', description: '2 curries + naan or rice + chicken tikka + soft drink.', price: '¥1,190' },
        { name: 'BBQ Set', nameJa: 'バーベキューセット', description: '2 curries + naan or rice + tandoori chicken + seekh kabab + malai tikka + dessert + soft drink.', price: '¥1,550' },
        { name: 'Child Set', nameJa: 'お子様セット', description: 'Mild curry + naan or rice + soft drink + dessert.', price: '¥550' },
        { name: 'Meal Time Set', nameJa: 'ミールタイムセット', description: 'Curry, naan or rice, tandoori chicken, salad, dessert, and soft drink.', price: '¥1,850' },
        { name: 'Zaika Special Set', nameJa: 'ザイカスペシャルセット', description: 'Two curries with tandoori chicken, seekh kabab, malai tikka, dessert, and drink.', price: '¥2,550' },
        { name: 'Family A Set', nameJa: 'ファミリーAセット', description: 'Choice 2 curries, salad, cheese naan, garlic naan, butter naan, chicken tikka 2p, and soft drinks.', price: '¥3,450' },
        { name: 'Family B Set', nameJa: 'ファミリーBセット', description: 'Choice 3 curries, salad, cheese naan, garlic naan, butter naan, chicken tikka 3p, and soft drinks.', price: '¥4,450' }
      ]
    },
    {
      category: 'takeout',
      label: 'Take Out テイクアウト',
      summary: 'Takeout curry set board with the same curry choices shown on the restaurant poster.',
      items: [
        { name: 'One Curry Set', nameJa: '1種類カレーセット', description: 'Choose one curry with naan or rice.', price: '¥600' },
        { name: 'Today\'s Curry', nameJa: '日替わりカレー', description: 'Takeout curry choice.', price: '¥600' },
        { name: 'Chicken Curry', nameJa: 'チキンカレー', description: 'Takeout curry choice.', price: '¥600' },
        { name: 'Vegetable Curry', nameJa: 'ベジタブルカレー', description: 'Takeout curry choice.', price: '¥600' },
        { name: 'Dal Curry', nameJa: 'ダルカレー', description: 'Takeout curry choice.', price: '¥600' },
        { name: 'Keema Curry', nameJa: 'キーマカレー', description: 'Takeout curry choice.', price: '¥600' },
        { name: 'Butter Chicken Curry', nameJa: 'バターチキンカレー', description: 'Takeout curry choice.', price: '¥690' },
        { name: 'Mutton Curry', nameJa: 'マトン(羊肉)カレー', description: 'Takeout curry choice.', price: '¥690' },
        { name: 'Sag Chicken', nameJa: 'ほうれん草チキン', description: 'Takeout curry choice.', price: '¥690' },
        { name: 'Sag Paneer', nameJa: 'ほうれん草パニール', description: 'Takeout curry choice.', price: '¥690' },
        { name: 'Seafood Curry', nameJa: 'シーフードカレー', description: 'Takeout curry choice.', price: '¥690' },
        { name: 'Sag Mutton', nameJa: 'ほうれん草マトン', description: 'Takeout curry choice.', price: '¥690' }
      ]
    },
    {
      category: 'salad-snack',
      label: 'Snack スナック',
      summary: 'Salad and snack board, including rolls, fritters, Nepali snacks, and small plates.',
      items: [
        { name: 'Green Salad', nameJa: 'グリーンサラダ', description: 'Fresh green salad.', price: 'M ¥300 / L ¥530' },
        { name: 'Chicken Salad', nameJa: 'チキンサラダ', description: 'Chicken salad.', price: 'M ¥400 / L ¥660' },
        { name: 'Caesar Salad', nameJa: 'シーザーサラダ', description: 'Caesar salad.', price: 'M ¥390 / L ¥645' },
        { name: 'Nepali Salad', nameJa: 'ネパールサラダ', description: 'Nepali salad.', price: '¥590' },
        { name: 'Avocado Salad', nameJa: 'アボカドサラダ', description: 'Avocado salad.', price: '¥780' },
        { name: 'Tomato Salad', nameJa: 'トマトサラダ', description: 'Tomato salad.', price: '¥550' },
        { name: 'Special Salad', nameJa: 'スペシャルサラダ', description: 'Special salad.', price: '¥830' },
        { name: 'Chicken Nan Roll', nameJa: 'チキンナンロール', description: 'Chicken nan roll.', price: '¥670' },
        { name: 'Chicken Cheese Nan Roll', nameJa: 'チキンチーズナンロール', description: 'Chicken cheese nan roll.', price: '¥880' },
        { name: 'Roti Roll', nameJa: 'ロティロール', description: 'Roti roll.', price: '¥630' },
        { name: 'Horenso Iame', nameJa: 'ほうれん草炒め', description: 'Spinach stir-fry.', price: '¥540' },
        { name: 'Samosa', nameJa: 'サモサ', description: 'Samosa 2 pieces.', price: '¥650' },
        { name: 'Fry Potato', nameJa: 'フライポテト', description: 'French fries.', price: '¥560' },
        { name: 'Momo', nameJa: 'モモ', description: 'Nepali steamed dumplings.', price: '¥660' },
        { name: 'Chowmein', nameJa: 'チャウミン', description: 'Nepali-style chowmein.', price: '¥790' },
        { name: 'Mutton Sukuti', nameJa: 'マトンスクティ', description: 'Mutton sukuti.', price: '¥880' },
        { name: 'Bhutan', nameJa: 'ブタン', description: 'Bhutan snack.', price: '¥880' },
        { name: 'Chana Chatpat', nameJa: 'チャナチャットパット', description: 'Chana chatpat.', price: '¥550' },
        { name: 'Pani Puri', nameJa: 'パニプリ', description: 'Pani puri.', price: '¥650' },
        { name: 'Bhatmas Sadeko', nameJa: 'バトマスサデコ', description: 'Bhatmas sadeko.', price: '¥560' },
        { name: 'Chicken Chura', nameJa: 'チキンチュラ', description: 'Chicken chura.', price: '¥640' },
        { name: 'Alu Mula', nameJa: 'アルムラ', description: 'Alu mula.', price: '¥550' },
        { name: 'Alu Jeera', nameJa: 'アルジーラ', description: 'Alu jeera.', price: '¥550' },
        { name: 'Paneer Pakoda', nameJa: 'パニーパコダ', description: 'Paneer pakoda.', price: '¥790' },
        { name: 'Chicken Pakoda', nameJa: 'チキンパコダ', description: 'Chicken pakoda.', price: '¥710' },
        { name: 'Veg Pakoda', nameJa: '野菜パコダ', description: 'Vegetable pakoda.', price: '¥690' },
        { name: 'Chicken Sekuwa', nameJa: 'チキンセクワ', description: 'Chicken sekuwa.', price: '¥670' },
        { name: 'Mutton Sekuwa', nameJa: 'マトンセクワ', description: 'Mutton sekuwa.', price: '¥890' },
        { name: 'Pork Sekuwa', nameJa: 'ポークセクワ', description: 'Pork sekuwa.', price: '¥810' },
        { name: 'Tandoori Chicken', nameJa: 'タンドリーチキン', description: '2p ¥730 / 4p ¥1350.', price: '¥730 / ¥1,350' },
        { name: 'Chicken Tikka', nameJa: 'チキンティッカ', description: '2p ¥430 / 4p ¥760.', price: '¥430 / ¥760' },
        { name: 'Malai Tikka', nameJa: 'マライティッカ', description: '2p ¥460 / 4p ¥880.', price: '¥460 / ¥880' },
        { name: 'Seekh Kabab', nameJa: 'シークカバブ', description: '2p ¥490 / 4p ¥890.', price: '¥490 / ¥890' },
        { name: 'Tandoori Set', nameJa: 'タンドリーセット', description: 'Tandoori chicken, seekh kabab, and malai tikka.', price: '¥770' },
        { name: 'Mix Grill', nameJa: 'ミックスグリル', description: 'Mixed grill platter.', price: '¥1,570' }
      ]
    },
    {
      category: 'naan',
      label: 'Nan & Rice ナン&ライス',
      summary: 'Breads, rice, and biryani items from the photographed naan and rice board.',
      items: [
        { name: 'Plain Naan', nameJa: 'プレーンナン', description: 'Fresh plain naan.', price: '¥330' },
        { name: 'Garlic Naan', nameJa: 'ガーリックナン', description: 'Garlic naan.', price: '¥440' },
        { name: 'Coconut Naan', nameJa: 'ココナッツナン', description: 'Coconut naan.', price: '¥550' },
        { name: 'Cheese Naan', nameJa: 'チーズナン', description: 'Cheese naan.', price: '¥630' },
        { name: 'Sesame Naan', nameJa: 'ごまナン', description: 'Sesame naan.', price: '¥430' },
        { name: 'Basmati Rice', nameJa: 'バスマティライス', description: 'Basmati rice.', price: '¥420' },
        { name: 'Turmeric Rice', nameJa: 'ターメリックライス', description: 'Turmeric rice.', price: '¥330' },
        { name: 'Ebi Letus Chahan', nameJa: '海老レタス炒飯', description: 'Shrimp lettuce fried rice.', price: '¥850' },
        { name: 'Chicken Biryani', nameJa: 'チキンビリヤニ', description: 'Chicken biryani.', price: '¥830' },
        { name: 'Mutton Biryani', nameJa: 'マトンビリヤニ', description: 'Mutton biryani.', price: '¥870' },
        { name: 'Prawn Biryani', nameJa: '海老ビリヤニ', description: 'Prawn biryani.', price: '¥895' }
      ]
    },
    {
      category: 'drink',
      label: 'Drink ドリンク',
      summary: 'Soft drinks, beer, wine, cocktails, and hard drinks from the photographed drink menu.',
      items: [
        { name: 'Plain Lassi', nameJa: 'プレーンラッシー', description: 'Plain lassi.', price: '¥300' },
        { name: 'Banana Lassi', nameJa: 'バナナラッシー', description: 'Banana lassi.', price: '¥400' },
        { name: 'Mango Lassi', nameJa: 'マンゴーラッシー', description: 'Mango lassi.', price: '¥350' },
        { name: 'Orange Juice', nameJa: 'オレンジジュース', description: 'Orange juice.', price: '¥350' },
        { name: 'Oolong Tea', nameJa: 'ウーロン茶', description: 'Oolong tea.', price: '¥300' },
        { name: 'Cola', nameJa: 'コーラ', description: 'Cola.', price: '¥300' },
        { name: 'Ginger Ale', nameJa: 'ジンジャーエール', description: 'Ginger ale.', price: '¥350' },
        { name: 'Masala Chai', nameJa: 'マサラチャイ', description: 'Hot or iced masala chai.', price: '¥350' },
        { name: 'Coffee', nameJa: 'コーヒー', description: 'Hot or iced coffee.', price: '¥300' },
        { name: 'Draft Beer (L)', nameJa: '生ビール(Lサイズ)', description: 'Draft beer large.', price: '¥750' },
        { name: 'Draft Beer (M)', nameJa: '生ビール(Mサイズ)', description: 'Draft beer medium.', price: '¥480' },
        { name: 'Bottle Beer', nameJa: '瓶ビール', description: 'Bottle beer.', price: '¥550' },
        { name: 'Corona Beer', nameJa: 'コロナビール', description: 'Corona beer.', price: '¥620' },
        { name: 'Nepal Ice Beer', nameJa: 'ネパールアイスビール', description: 'Nepal Ice beer.', price: '¥650' },
        { name: 'Non Alcohol Beer', nameJa: 'ノンアルコールビール', description: 'Non-alcohol beer.', price: '¥350' },
        { name: 'Santa Bottle Wine', nameJa: 'サンタボトルワイン', description: 'Bottle wine red/white.', price: '¥2,500' },
        { name: 'Glass Wine', nameJa: 'グラスワイン', description: 'Glass wine red/white.', price: '¥450' },
        { name: 'Decanter', nameJa: 'デカンタ', description: 'Decanter red/white.', price: '¥1,500' },
        { name: 'Lemon Sour', nameJa: 'レモンサワー', description: 'Lemon sour.', price: '¥500' },
        { name: 'Lime Sour', nameJa: 'ライムサワー', description: 'Lime sour.', price: '¥500' },
        { name: 'Highball', nameJa: 'ハイボール', description: 'Highball.', price: '¥450' },
        { name: 'Kaku Highball', nameJa: '角ハイボール', description: 'Kaku highball.', price: '¥530' },
        { name: 'Chivas Highball', nameJa: 'シーバスハイボール', description: 'Chivas highball.', price: '¥500' },
        { name: 'Cassis Lassi', nameJa: 'カシスラッシー', description: 'Cassis lassi cocktail.', price: '¥450' },
        { name: 'Cassis Mango Lassi', nameJa: 'カシスマンゴーラッシー', description: 'Cassis mango lassi cocktail.', price: '¥450' },
        { name: 'Cassis Soda', nameJa: 'カシスソーダ', description: 'Cassis soda cocktail.', price: '¥450' },
        { name: 'Cassis Oolong', nameJa: 'カシスウーロン', description: 'Cassis oolong cocktail.', price: '¥450' },
        { name: 'Cassis Orange', nameJa: 'カシスオレンジ', description: 'Cassis orange cocktail.', price: '¥450' },
        { name: 'Malibu Mango Lassi', nameJa: 'マリブマンゴーラッシー', description: 'Malibu mango lassi cocktail.', price: '¥450' },
        { name: 'Malibu Soda', nameJa: 'マリブソーダ', description: 'Malibu soda cocktail.', price: '¥450' },
        { name: 'Campari Orange', nameJa: 'カンパリオレンジ', description: 'Campari orange cocktail.', price: '¥450' },
        { name: 'Campari Soda', nameJa: 'カンパリソーダ', description: 'Campari soda cocktail.', price: '¥450' },
        { name: 'Khukuri Rum', nameJa: 'ネパールラム', description: 'With water, rock, soda, or cola.', price: '¥500 / ¥650' },
        { name: 'Spicy Khukuri Rum', nameJa: 'スパイシーククリラム', description: 'With water, rock, soda, or cola.', price: '¥500 / ¥650' },
        { name: 'Chivas Regal', nameJa: 'シーバスリーガル', description: 'With water, rock, or soda.', price: '¥500' },
        { name: 'Jack Daniel', nameJa: 'ジャックダニエル', description: 'With water, rock, or soda.', price: '¥500' },
        { name: 'Black Label', nameJa: 'ブラックラベル', description: 'With water, rock, or soda.', price: '¥500' },
        { name: 'Vodka', nameJa: 'ウォッカ', description: 'With water, rock, or soda.', price: '¥500' },
        { name: 'Gin', nameJa: 'ジン', description: 'With water, rock, or soda.', price: '¥500' }
      ]
    },
    {
      category: 'party',
      label: 'Party Menu',
      summary: 'Party courses and drink menu from the photographed party board.',
      items: [
        { name: 'A Course', nameJa: 'Aコース', description: '120 min all-you-can-drink, Caesar salad, papad, Sag Pork Fried, tandoori chicken, seekh kabab, choice 3 curry, naan, and rice.', price: '¥3,850' },
        { name: 'B Course', nameJa: 'Bコース', description: '120 min all-you-can-drink, Caesar salad, masala papad, Sag Pork Fried, tandoori chicken, seekh kabab, choice 3 curry, naan, and rice.', price: '¥4,250' },
        { name: 'C Course', nameJa: 'Cコース', description: '120 min all-you-can-drink, Caesar salad, papad, paneer pakoda, samosa, tandoori chicken, seekh kabab, malai tikka, cheese naan, choice 3 curry, naan, and rice.', price: '¥4,550' },
        { name: 'All-You-Can-Drink', nameJa: '飲み放題メニュー', description: 'Lassi, mango lassi, ginger ale, cola, oolong tea, draft beer, glass wine, highball, cocktails, sour drinks, and spirits.', price: 'Included' }
      ]
    }
  ];

  const activeMenu = menuItems.find((menu) => menu.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-heading">
          <span className="section-tag">Menu Highlights</span>
          <h2>Our <span>Menu</span></h2>

        </div>

        <div className="menu-categories">
          {menuItems.map((menuCategory) => (
            <button
              key={menuCategory.category}
              className={`category-btn ${activeCategory === menuCategory.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(menuCategory.category)}
            >
              {menuCategory.label}
            </button>
          ))}
        </div>

        {activeMenu && (
          <div className="menu-items">
            {activeMenu.items.map((item, index) => (
              <div key={`${item.name}-${index}`} className="menu-item">
                <span className="menu-item-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="menu-item-header">
                  <div>
                    <h4>{item.name}</h4>
                    <span className="menu-item-ja">{item.nameJa}</span>
                  </div>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-description">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
