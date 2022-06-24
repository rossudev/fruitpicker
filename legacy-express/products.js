skuFunc = function(pickitem) {
	let skus = {['.']: [ '.', '.', '.' ]};
	let precess = '';
	if ( pickitem === "iphone" ) {
		skus = {
			['MNCP3LL/A']: [ 'iPhone 13 Pro Max, 128GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.7-inch-display-128gb-alpine-green-unlocked', '$1099' ],
			['MLKP3LL/A']: [ 'iPhone 13 Pro Max, 128GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.7-inch-display-128gb-sierra-blue-unlocked', '$1099' ],
			['MLKN3LL/A']: [ 'iPhone 13 Pro Max, 128GB, Gold', 'buy-iphone/iphone-13-pro/6.7-inch-display-128gb-gold-unlocked', '$1099' ],
			['MLKM3LL/A']: [ 'iPhone 13 Pro Max, 128GB, Silver', 'buy-iphone/iphone-13-pro/6.7-inch-display-128gb-silver-unlocked', '$1099' ],
			['MLKL3LL/A']: [ 'iPhone 13 Pro Max, 128GB, Graphite', 'buy-iphone/iphone-13-pro/6.7-inch-display-128gb-graphite-unlocked', '$1099' ],
			['MNCQ3LL/A']: [ 'iPhone 13 Pro Max, 256GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.7-inch-display-256gb-alpine-green-unlocked', '$1199' ],
			['MLKV3LL/A']: [ 'iPhone 13 Pro Max, 256GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.7-inch-display-256gb-sierra-blue-unlocked', '$1199' ],
			['MLKU3LL/A']: [ 'iPhone 13 Pro Max, 256GB, Gold', 'buy-iphone/iphone-13-pro/6.7-inch-display-256gb-gold-unlocked', '$1199' ],
			['MLKT3LL/A']: [ 'iPhone 13 Pro Max, 256GB, Silver', 'buy-iphone/iphone-13-pro/6.7-inch-display-256gb-silver-unlocked', '$1199' ],
			['MLKR3LL/A']: [ 'iPhone 13 Pro Max, 256GB, Graphite', 'buy-iphone/iphone-13-pro/6.7-inch-display-256gb-graphite-unlocked', '$1199' ],
			['MNCR3LL/A']: [ 'iPhone 13 Pro Max, 512GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.7-inch-display-512gb-alpine-green-unlocked', '$1399' ],
			['MLL03LL/A']: [ 'iPhone 13 Pro Max, 512GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.7-inch-display-512gb-sierra-blue-unlocked', '$1399' ],
			['MLKY3LL/A']: [ 'iPhone 13 Pro Max, 512GB, Gold', 'buy-iphone/iphone-13-pro/6.7-inch-display-512gb-gold-unlocked', '$1399' ],
			['MLKX3LL/A']: [ 'iPhone 13 Pro Max, 512GB, Silver', 'buy-iphone/iphone-13-pro/6.7-inch-display-512gb-silver-unlocked', '$1399' ],
			['MLKW3LL/A']: [ 'iPhone 13 Pro Max, 512GB, Graphite', 'buy-iphone/iphone-13-pro/6.7-inch-display-512gb-graphite-unlocked', '$1399' ],
			['MNCT3LL/A']: [ 'iPhone 13 Pro Max, 1TB, Alpine Green', 'buy-iphone/iphone-13-pro/6.7-inch-display-1tb-alpine-green-unlocked', '$1599' ],
			['MLL53LL/A']: [ 'iPhone 13 Pro Max, 1TB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.7-inch-display-1tb-sierra-blue-unlocked', '$1599' ],
			['MLL43LL/A']: [ 'iPhone 13 Pro Max, 1TB, Gold', 'buy-iphone/iphone-13-pro/6.7-inch-display-1tb-gold-unlocked', '$1599' ],
			['MLL33LL/A']: [ 'iPhone 13 Pro Max, 1TB, Silver', 'buy-iphone/iphone-13-pro/6.7-inch-display-1tb-silver-unlocked', '$1599' ],
			['MLL23LL/A']: [ 'iPhone 13 Pro Max, 1TB, Graphite', 'buy-iphone/iphone-13-pro/6.7-inch-display-1tb-graphite-unlocked', '$1599' ],
			['---1']: [ '---', '---', '---' ],
			['MNDT3LL/A']: [ 'iPhone 13 Pro, 128GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.1-inch-display-128gb-alpine-green-unlocked', '$999' ],
			['MLTT3LL/A']: [ 'iPhone 13 Pro, 128GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.1-inch-display-128gb-sierra-blue-unlocked', '$999' ],
			['MLTR3LL/A']: [ 'iPhone 13 Pro, 128GB, Gold', 'buy-iphone/iphone-13-pro/6.1-inch-display-128gb-gold-unlocked', '$999' ],
			['MLTQ3LL/A']: [ 'iPhone 13 Pro, 128GB, Silver', 'buy-iphone/iphone-13-pro/6.1-inch-display-128gb-silver-unlocked', '$999' ],
			['MLTP3LL/A']: [ 'iPhone 13 Pro, 128GB, Graphite', 'buy-iphone/iphone-13-pro/6.1-inch-display-128gb-graphite-unlocked', '$999' ],
			['MNDU3LL/A']: [ 'iPhone 13 Pro, 256GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.1-inch-display-256gb-alpine-green-unlocked', '$1099' ],
			['MLU03LL/A']: [ 'iPhone 13 Pro, 256GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.1-inch-display-256gb-sierra-blue-unlocked', '$1099' ],
			['MLTY3LL/A']: [ 'iPhone 13 Pro, 256GB, Gold', 'buy-iphone/iphone-13-pro/6.1-inch-display-256gb-gold-unlocked', '$1099' ],
			['MLTX3LL/A']: [ 'iPhone 13 Pro, 256GB, Silver', 'buy-iphone/iphone-13-pro/6.1-inch-display-256gb-silver-unlocked', '$1099' ],
			['MLTW3LL/A']: [ 'iPhone 13 Pro, 256GB, Graphite', 'buy-iphone/iphone-13-pro/6.1-inch-display-256gb-graphite-unlocked', '$1099' ],
			['MNDV3LL/A']: [ 'iPhone 13 Pro, 512GB, Alpine Green', 'buy-iphone/iphone-13-pro/6.1-inch-display-512gb-alpine-green-unlocked', '$1299' ],
			['MLU73LL/A']: [ 'iPhone 13 Pro, 512GB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.1-inch-display-512gb-sierra-blue-unlocked', '$1299' ],
			['MLU43LL/A']: [ 'iPhone 13 Pro, 512GB, Gold', 'buy-iphone/iphone-13-pro/6.1-inch-display-512gb-gold-unlocked', '$1299' ],
			['MLU33LL/A']: [ 'iPhone 13 Pro, 512GB, Silver', 'buy-iphone/iphone-13-pro/6.1-inch-display-512gb-silver-unlocked', '$1299' ],
			['MLU13LL/A']: [ 'iPhone 13 Pro, 512GB, Graphite', 'buy-iphone/iphone-13-pro/6.1-inch-display-512gb-graphite-unlocked', '$1299' ],
			['MNDW3LL/A']: [ 'iPhone 13 Pro, 1TB, Alpine Green', 'buy-iphone/iphone-13-pro/6.1-inch-display-1tb-alpine-green-unlocked', '$1499' ],
			['MLUD3LL/A']: [ 'iPhone 13 Pro, 1TB, Sierra Blue', 'buy-iphone/iphone-13-pro/6.1-inch-display-1tb-sierra-blue-unlocked', '$1499' ],
			['MLUC3LL/A']: [ 'iPhone 13 Pro, 1TB, Gold', 'buy-iphone/iphone-13-pro/6.1-inch-display-1tb-gold-unlocked', '$1499' ],
			['MLUA3LL/A']: [ 'iPhone 13 Pro, 1TB, Silver', 'buy-iphone/iphone-13-pro/6.1-inch-display-1tb-silver-unlocked', '$1499' ],
			['MLU93LL/A']: [ 'iPhone 13 Pro, 1TB, Graphite', 'buy-iphone/iphone-13-pro/6.1-inch-display-1tb-graphite-unlocked', '$1499' ],
			['---2']: [ '---', '---', '---' ],
			['MNGD3LL/A']: [ 'iPhone 13, 128GB, Green', 'buy-iphone/iphone-13/6.1-inch-display-128gb-green-unlocked', '$799' ],
			['MLML3LL/A']: [ 'iPhone 13, 128GB, Midnight', 'buy-iphone/iphone-13/6.1-inch-display-128gb-midnight-unlocked', '$799' ],
			['MLMT3LL/A']: [ 'iPhone 13, 128GB, Blue', 'buy-iphone/iphone-13/6.1-inch-display-128gb-blue-unlocked', '$799' ],
			['MLMN3LL/A']: [ 'iPhone 13, 128GB, Pink', 'buy-iphone/iphone-13/6.1-inch-display-128gb-pink-unlocked', '$799' ],
			['MLMM3LL/A']: [ 'iPhone 13, 128GB, Starlight', 'buy-iphone/iphone-13/6.1-inch-display-128gb-starlight-unlocked', '$799' ],
			['MLMQ3LL/A']: [ 'iPhone 13, 128GB, Red', 'buy-iphone/iphone-13/6.1-inch-display-128gb-red-unlocked', '$799' ],
			['MNGE3LL/A']: [ 'iPhone 13, 256GB, Green', 'buy-iphone/iphone-13/6.1-inch-display-256gb-green-unlocked', '$899' ],
			['MLMU3LL/A']: [ 'iPhone 13, 256GB, Midnight', 'buy-iphone/iphone-13/6.1-inch-display-256gb-midnight-unlocked', '$899' ],
			['MLN13LL/A']: [ 'iPhone 13, 256GB, Blue', 'buy-iphone/iphone-13/6.1-inch-display-256gb-blue-unlocked', '$899' ],
			['MLMY3LL/A']: [ 'iPhone 13, 256GB, Pink', 'buy-iphone/iphone-13/6.1-inch-display-256gb-pink-unlocked', '$899' ],
			['MLMX3LL/A']: [ 'iPhone 13, 256GB, Starlight', 'buy-iphone/iphone-13/6.1-inch-display-256gb-starlight-unlocked', '$899' ],
			['MLN03LL/A']: [ 'iPhone 13, 256GB, Red', 'buy-iphone/iphone-13/6.1-inch-display-256gb-red-unlocked', '$899' ],
			['MNGF3LL/A']: [ 'iPhone 13, 512GB, Green', 'buy-iphone/iphone-13/6.1-inch-display-512gb-green-unlocked', '$1099' ],
			['MLN23LL/A']: [ 'iPhone 13, 512GB, Midnight', 'buy-iphone/iphone-13/6.1-inch-display-512gb-midnight-unlocked', '$1099' ],
			['MLN83LL/A']: [ 'iPhone 13, 512GB, Blue', 'buy-iphone/iphone-13/6.1-inch-display-512gb-blue-unlocked', '$1099' ],
			['MLN43LL/A']: [ 'iPhone 13, 512GB, Pink', 'buy-iphone/iphone-13/6.1-inch-display-512gb-pink-unlocked', '$1099' ],
			['MLN33LL/A']: [ 'iPhone 13, 512GB, Starlight', 'buy-iphone/iphone-13/6.1-inch-display-512gb-starlight-unlocked', '$1099' ],
			['MLN53LL/A']: [ 'iPhone 13, 512GB, Red', 'buy-iphone/iphone-13/6.1-inch-display-512gb-red-unlocked', '$1099' ],
			['---3']: [ '---', '---', '---' ],
			['MNF83LL/A']: [ 'iPhone 13 Mini, 128GB, Green', 'buy-iphone/iphone-13/5.4-inch-display-128gb-green-unlocked', '$699' ],
			['MLHM3LL/A']: [ 'iPhone 13 Mini, 128GB, Midnight', 'buy-iphone/iphone-13/5.4-inch-display-128gb-midnight-unlocked', '$699' ],
			['MLHR3LL/A']: [ 'iPhone 13 Mini, 128GB, Blue', 'buy-iphone/iphone-13/5.4-inch-display-128gb-blue-unlocked', '$699' ],
			['MLHP3LL/A']: [ 'iPhone 13 Mini, 128GB, Pink', 'buy-iphone/iphone-13/5.4-inch-display-128gb-pink-unlocked', '$699' ],
			['MLHN3LL/A']: [ 'iPhone 13 Mini, 128GB, Starlight', 'buy-iphone/iphone-13/5.4-inch-display-128gb-starlight-unlocked', '$699' ],
			['MLHQ3LL/A']: [ 'iPhone 13 Mini, 128GB, Red', 'buy-iphone/iphone-13/5.4-inch-display-128gb-red-unlocked', '$699' ],
			['MNF93LL/A']: [ 'iPhone 13 Mini, 256GB, Green', 'buy-iphone/iphone-13/5.4-inch-display-256gb-green-unlocked', '$799' ],
			['MLHT3LL/A']: [ 'iPhone 13 Mini, 256GB, Midnight', 'buy-iphone/iphone-13/5.4-inch-display-256gb-midnight-unlocked', '$799' ],
			['MLHX3LL/A']: [ 'iPhone 13 Mini, 256GB, Blue', 'buy-iphone/iphone-13/5.4-inch-display-256gb-blue-unlocked', '$799' ],
			['MLHV3LL/A']: [ 'iPhone 13 Mini, 256GB, Pink', 'buy-iphone/iphone-13/5.4-inch-display-256gb-pink-unlocked', '$799' ],
			['MLHU3LL/A']: [ 'iPhone 13 Mini, 256GB, Starlight', 'buy-iphone/iphone-13/5.4-inch-display-256gb-starlight-unlocked', '$799' ],
			['MLHW3LL/A']: [ 'iPhone 13 Mini, 256GB, Red', 'buy-iphone/iphone-13/5.4-inch-display-256gb-red-unlocked', '$799' ],
			['MNFA3LL/A']: [ 'iPhone 13 Mini, 512GB, Green', 'buy-iphone/iphone-13/5.4-inch-display-512gb-green-unlocked', '$999' ],
			['MLHY3LL/A']: [ 'iPhone 13 Mini, 512GB, Midnight', 'buy-iphone/iphone-13/5.4-inch-display-512gb-midnight-unlocked', '$999' ],
			['MLJ33LL/A']: [ 'iPhone 13 Mini, 512GB, Blue', 'buy-iphone/iphone-13/5.4-inch-display-512gb-blue-unlocked', '$999' ],
			['MLJ13LL/A']: [ 'iPhone 13 Mini, 512GB, Pink', 'buy-iphone/iphone-13/5.4-inch-display-512gb-pink-unlocked', '$999' ],
			['MLJ03LL/A']: [ 'iPhone 13 Mini, 512GB, Starlight', 'buy-iphone/iphone-13/5.4-inch-display-512gb-starlight-unlocked', '$999' ],
			['MLJ23LL/A']: [ 'iPhone 13 Mini, 512GB, Red', 'buy-iphone/iphone-13/5.4-inch-display-512gb-red-unlocked', '$999' ],
		};
	};
	if ( pickitem === "iphold" ) {
		skus = {
 			['MMX63LL/A']: [ 'iPhone SE, 64GB, Starlight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$429' ],
			['MMX53LL/A']: [ 'iPhone SE, 64GB, Midnight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$429' ],
			['MMX73LL/A']: [ 'iPhone SE, 64GB, Red', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$429' ],
			['MMX93LL/A']: [ 'iPhone SE, 128GB, Starlight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$479' ],
			['MMX83LL/A']: [ 'iPhone SE, 128GB, Midnight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$479' ],
			['MMXA3LL/A']: [ 'iPhone SE, 128GB, Red', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$479' ],
			['MMXD3LL/A']: [ 'iPhone SE, 256GB, Starlight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$579' ],
			['MMXC3LL/A']: [ 'iPhone SE, 256GB, Midnight', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$579' ],
			['MMXE3LL/A']: [ 'iPhone SE, 256GB, Red', 'buy-iphone/iphone-se/4.7-inch-display-64gb-midnight-unlocked', '$579' ],
			['---1']: [ '---', '---', '---' ],
			['MHCV3LL/A']: [ 'iPhone 11, 64GB, Purple', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHCU3LL/A']: [ 'iPhone 11, 64GB, Yellow', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHCW3LL/A']: [ 'iPhone 11, 64GB, Green', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHCQ3LL/A']: [ 'iPhone 11, 64GB, White', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHCP3LL/A']: [ 'iPhone 11, 64GB, Black', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHCR3LL/A']: [ 'iPhone 11, 64GB, Red', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$499' ],
			['MHD23LL/A']: [ 'iPhone 11, 128GB, Purple', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['MHD13LL/A']: [ 'iPhone 11, 128GB, Yellow', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['MHD33LL/A']: [ 'iPhone 11, 128GB, Green', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['MHCY3LL/A']: [ 'iPhone 11, 128GB, White', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['MHCX3LL/A']: [ 'iPhone 11, 128GB, Black', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['MHD03LL/A']: [ 'iPhone 11, 128GB, Red', 'buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked', '$549' ],
			['---2']: [ '---', '---', '---' ],
			['MJNE3LL/A']: [ 'iPhone 12, 64GB, Purple', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MGH93LL/A']: [ 'iPhone 12, 64GB, Blue', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MGHA3LL/A']: [ 'iPhone 12, 64GB, Green', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MGH73LL/A']: [ 'iPhone 12, 64GB, White', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MGH63LL/A']: [ 'iPhone 12, 64GB, Black', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MGH83LL/A']: [ 'iPhone 12, 64GB, Red', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$699' ],
			['MJNF3LL/A']: [ 'iPhone 12, 128GB, Purple', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MGHF3LL/A']: [ 'iPhone 12, 128GB, Blue', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MGHG3LL/A']: [ 'iPhone 12, 128GB, Green', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MGHD3LL/A']: [ 'iPhone 12, 128GB, White', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MGHC3LL/A']: [ 'iPhone 12, 128GB, Black', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MGHE3LL/A']: [ 'iPhone 12, 128GB, Red', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$749' ],
			['MJNG3LL/A']: [ 'iPhone 12, 256GB, Purple', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['MGHL3LL/A']: [ 'iPhone 12, 256GB, Blue', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['MGHM3LL/A']: [ 'iPhone 12, 256GB, Green', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['MGHJ3LL/A']: [ 'iPhone 12, 256GB, White', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['MGHH3LL/A']: [ 'iPhone 12, 256GB, Black', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['MGHK3LL/A']: [ 'iPhone 12, 256GB, Red', 'buy-iphone/iphone-12/6.1-inch-display-64gb-green-unlocked', '$849' ],
			['---3']: [ '---', '---', '---' ],
			['MJQ83LL/A']: [ 'iPhone 12 Mini, 64GB, Purple', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MG8J3LL/A']: [ 'iPhone 12 Mini, 64GB, Blue', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MG8K3LL/A']: [ 'iPhone 12 Mini, 64GB, Green', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MG8G3LL/A']: [ 'iPhone 12 Mini, 64GB, White', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MG8F3LL/A']: [ 'iPhone 12 Mini, 64GB, Black', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MG8H3LL/A']: [ 'iPhone 12 Mini, 64GB, Red', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$599' ],
			['MJQ93LL/A']: [ 'iPhone 12 Mini, 128GB, Purple', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MG8P3LL/A']: [ 'iPhone 12 Mini, 128GB, Blue', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MG8Q3LL/A']: [ 'iPhone 12 Mini, 128GB, Green', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MG8M3LL/A']: [ 'iPhone 12 Mini, 128GB, White', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MG8L3LL/A']: [ 'iPhone 12 Mini, 128GB, Black', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MG8N3LL/A']: [ 'iPhone 12 Mini, 128GB, Red', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$649' ],
			['MJQA3LL/A']: [ 'iPhone 12 Mini, 256GB, Purple', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
			['MG8V3LL/A']: [ 'iPhone 12 Mini, 256GB, Blue', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
			['MG8W3LL/A']: [ 'iPhone 12 Mini, 256GB, Green', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
			['MG8T3LL/A']: [ 'iPhone 12 Mini, 256GB, White', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
			['MG8R3LL/A']: [ 'iPhone 12 Mini, 256GB, Black', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
			['MG8U3LL/A']: [ 'iPhone 12 Mini, 256GB, Red', 'buy-iphone/iphone-12/5.4-inch-display-64gb-green-unlocked', '$749' ],
		};
	};
	if ( pickitem === "ipad" ) {
		skus = {
			['MK2K3LL/A']: [ 'iPad, 64GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-10-2/64gb-space-gray-wifi', '$329' ],
			['MK2L3LL/A']: [ 'iPad, 64GB, Wi-Fi, Silver', 'buy-ipad/ipad-10-2/64gb-silver-wifi', '$329' ],
			['MK2N3LL/A']: [ 'iPad, 256GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-10-2/256gb-space-gray-wifi', '$479' ],
			['MK2P3LL/A']: [ 'iPad, 256GB, Wi-Fi, Silver', 'buy-ipad/ipad-10-2/256gb-silver-wifi', '$479' ],
			['MK663LL/A']: [ 'iPad, 64GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-10-2/64gb-space-gray-wifi-cellular', '$459' ],
			['MK673LL/A']: [ 'iPad, 64GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-10-2/64gb-silver-wifi-cellular', '$459' ],
			['MK693LL/A']: [ 'iPad, 256GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-10-2/256gb-space-gray-wifi-cellular', '$609' ],
			['MK6A3LL/A']: [ 'iPad, 256GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-10-2/256gb-silver-wifi-cellular', '$609' ],
			['---1']: [ '---', '---', '---' ],
			['MK7M3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-mini/64gb-space-gray-wifi', '$499' ],
			['MLWL3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi, Pink', 'buy-ipad/ipad-mini/64gb-pink-wifi', '$499' ],
			['MK7R3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi, Purple', 'buy-ipad/ipad-mini/64gb-purple-wifi', '$499' ],
			['MK7P3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi, Starlight', 'buy-ipad/ipad-mini/64gb-starlight-wifi', '$499' ],
			['MK7T3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-mini/256gb-space-gray-wifi', '$649' ],
			['MLWR3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi, Pink', 'buy-ipad/ipad-mini/256gb-pink-wifi', '$649' ],
			['MK7X3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi, Purple', 'buy-ipad/ipad-mini/256gb-purple-wifi', '$649' ],
			['MK7V3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi, Starlight', 'buy-ipad/ipad-mini/256gb-starlight-wifi', '$649' ],
			['MK893LL/A']: [ 'iPad Mini, 64GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-mini/64gb-space-gray-wifi-cellular', '$649' ],
			['MLX43LL/A']: [ 'iPad Mini, 64GB, Wi-Fi/Cellular, Pink', 'buy-ipad/ipad-mini/64gb-pink-wifi-cellular', '$649' ],
			['MK8E3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi/Cellular, Purple', 'buy-ipad/ipad-mini/64gb-purple-wifi-cellular', '$649' ],
			['MK8C3LL/A']: [ 'iPad Mini, 64GB, Wi-Fi/Cellular, Starlight', 'buy-ipad/ipad-mini/64gb-starlight-wifi-cellular', '$649' ],
			['MK8F3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-mini/256gb-space-gray-wifi-cellular', '$799' ],
			['MLX93LL/A']: [ 'iPad Mini, 256GB, Wi-Fi/Cellular, Pink', 'buy-ipad/ipad-mini/256gb-pink-wifi-cellular', '$799' ],
			['MK8K3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi/Cellular, Purple', 'buy-ipad/ipad-mini/256gb-purple-wifi-cellular', '$799' ],
			['MK8H3LL/A']: [ 'iPad Mini, 256GB, Wi-Fi/Cellular, Starlight', 'buy-ipad/ipad-mini/256gb-starlight-wifi-cellular', '$799' ],
			['---2']: [ '---', '---', '---' ],
 			['MM9C3LL/A']: [ 'iPad Air, 64GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-air/64gb-space-gray-wifi', '$599' ],
			['MM9D3LL/A']: [ 'iPad Air, 64GB, Wi-Fi, Pink', 'buy-ipad/ipad-air/64gb-pink-wifi', '$599' ],
			['MME23LL/A']: [ 'iPad Air, 64GB, Wi-Fi, Purple', 'buy-ipad/ipad-air/64gb-purple-wifi', '$599' ],
			['MM9E3LL/A']: [ 'iPad Air, 64GB, Wi-Fi, Blue', 'buy-ipad/ipad-air/64gb-blue-wifi', '$599' ],
			['MM9F3LL/A']: [ 'iPad Air, 64GB, Wi-Fi, Starlight', 'buy-ipad/ipad-air/64gb-starlight-wifi', '$599' ],
			['MM9L3LL/A']: [ 'iPad Air, 256GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-air/256gb-space-gray-wifi', '$749' ],
			['MM9M3LL/A']: [ 'iPad Air, 256GB, Wi-Fi, Pink', 'buy-ipad/ipad-air/256gb-pink-wifi', '$749' ],
			['MME63LL/A']: [ 'iPad Air, 256GB, Wi-Fi, Purple', 'buy-ipad/ipad-air/256gb-purple-wifi', '$749' ],
			['MM9N3LL/A']: [ 'iPad Air, 256GB, Wi-Fi, Blue', 'buy-ipad/ipad-air/256gb-blue-wifi', '$749' ],
			['MM9P3LL/A']: [ 'iPad Air, 256GB, Wi-Fi, Starlight', 'buy-ipad/ipad-air/256gb-starlight-wifi', '$749' ],
 			['MM6R3LL/A']: [ 'iPad Air, 64GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-air/64gb-space-gray-wifi-cellular', '$749' ],
			['MM6T3LL/A']: [ 'iPad Air, 64GB, Wi-Fi/Cellular, Pink', 'buy-ipad/ipad-air/64gb-pink-wifi-cellular', '$749' ],
			['MME93LL/A']: [ 'iPad Air, 64GB, Wi-Fi/Cellular, Purple', 'buy-ipad/ipad-air/64gb-purple-wifi-cellular', '$749' ],
			['MM6U3LL/A']: [ 'iPad Air, 64GB, Wi-Fi/Cellular, Blue', 'buy-ipad/ipad-air/64gb-blue-wifi-cellular', '$749' ],
			['MM6V3LL/A']: [ 'iPad Air, 64GB, Wi-Fi/Cellular, Starlight', 'buy-ipad/ipad-air/64gb-starlight-wifi-cellular', '$749' ],
			['MM713LL/A']: [ 'iPad Air, 256GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-air/256gb-space-gray-wifi-cellular', '$899' ],
			['MM723LL/A']: [ 'iPad Air, 256GB, Wi-Fi/Cellular, Pink', 'buy-ipad/ipad-air/256gb-pink-wifi-cellular', '$899' ],
			['MMED3LL/A']: [ 'iPad Air, 256GB, Wi-Fi/Cellular, Purple', 'buy-ipad/ipad-air/256gb-purple-wifi-cellular', '$899' ],
			['MM733LL/A']: [ 'iPad Air, 256GB, Wi-Fi/Cellular, Blue', 'buy-ipad/ipad-air/256gb-blue-wifi-cellular', '$899' ],
			['MM743LL/A']: [ 'iPad Air, 256GB, Wi-Fi/Cellular, Starlight', 'buy-ipad/ipad-air/256gb-starlight-wifi-cellular', '$899' ],
			['---3']: [ '---', '---', '---' ],
			['MHQR3LL/A']: [ 'iPad Pro 11in, 128GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-128gb-space-gray-wifi', '$799' ],
			['MHQT3LL/A']: [ 'iPad Pro 11in, 128GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/11-inch-display-64gb-silver-wifi', '$799' ],
			['MHQU3LL/A']: [ 'iPad Pro 11in, 256GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-256gb-space-gray-wifi', '$899' ],
			['MHQV3LL/A']: [ 'iPad Pro 11in, 256GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/11-inch-display-256gb-silver-wifi', '$899' ],
			['MHQW3LL/A']: [ 'iPad Pro 11in, 512GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-512gb-space-gray-wifi', '$1099' ],
			['MHQX3LL/A']: [ 'iPad Pro 11in, 512GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/11-inch-display-512gb-silver-wifi', '$1099' ],
			['MHQY3LL/A']: [ 'iPad Pro 11in, 1TB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-1tb-space-gray-wifi', '$1499' ],
			['MHR03LL/A']: [ 'iPad Pro 11in, 1TB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/11-inch-display-1tb-silver-wifi', '$1499' ],
			['MHR23LL/A']: [ 'iPad Pro 11in, 2TB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-2tb-space-gray-wifi', '$1899' ],
			['MHR33LL/A']: [ 'iPad Pro 11in, 2TB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/11-inch-display-2tb-silver-wifi', '$1899' ],
			['MHMT3LL/A']: [ 'iPad Pro 11in, 128GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-128gb-space-gray-wifi-cellular', '$999' ],
			['MHMU3LL/A']: [ 'iPad Pro 11in, 128GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/11-inch-display-128gb-silver-wifi-cellular', '$999' ],
			['MHMV3LL/A']: [ 'iPad Pro 11in, 256GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-256gb-space-gray-wifi-cellular', '$1099' ],
			['MHMW3LL/A']: [ 'iPad Pro 11in, 256GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/11-inch-display-256gb-silver-wifi-cellular', '$1099' ],
			['MHMX3LL/A']: [ 'iPad Pro 11in, 512GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-512gb-space-gray-wifi-cellular', '$1299' ],
			['MHMY3LL/A']: [ 'iPad Pro 11in, 512GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/11-inch-display-512gb-silver-wifi-cellular', '$1299' ],
			['MHN03LL/A']: [ 'iPad Pro 11in, 1TB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-1tb-space-gray-wifi-cellular', '$1699' ],
			['MHN13LL/A']: [ 'iPad Pro 11in, 1TB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/11-inch-display-1tb-silver-wifi-cellular', '$1699' ],
			['MHN23LL/A']: [ 'iPad Pro 11in, 2TB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/11-inch-display-2tb-space-gray-wifi-cellular', '$2099' ],
			['MHN33LL/A']: [ 'iPad Pro 11in, 2TB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/11-inch-display-2tb-silver-wifi-cellular', '$2099' ],
			['---4']: [ '---', '---', '---' ],
			['MHNF3LL/A']: [ 'iPad Pro 12.9in, 128GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-128gb-space-gray-wifi', '$1099' ],
			['MHNG3LL/A']: [ 'iPad Pro 12.9in, 128GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-128gb-silver-wifi', '$1099' ],
			['MHNH3LL/A']: [ 'iPad Pro 12.9in, 256GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-256gb-space-gray-wifi', '$1199' ],
			['MHNJ3LL/A']: [ 'iPad Pro 12.9in, 256GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-256gb-silver-wifi', '$1199' ],
			['MHNK3LL/A']: [ 'iPad Pro 12.9in, 512GB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-512gb-space-gray-wifi', '$1399' ],
			['MHNL3LL/A']: [ 'iPad Pro 12.9in, 512GB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-512gb-silver-wifi', '$1399' ],
			['MHNM3LL/A']: [ 'iPad Pro 12.9in, 1TB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-1tb-space-gray-wifi', '$1799' ],
			['MHNN3LL/A']: [ 'iPad Pro 12.9in, 1TB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-1tb-silver-wifi', '$1799' ],
			['MHNP3LL/A']: [ 'iPad Pro 12.9in, 2TB, Wi-Fi, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-2tb-space-gray-wifi', '$2199' ],
			['MHNQ3LL/A']: [ 'iPad Pro 12.9in, 2TB, Wi-Fi, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-2tb-silver-wifi', '$2199' ],
			['MHNR3LL/A']: [ 'iPad Pro 12.9in, 128GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-128gb-space-gray-wifi-cellular', '$1299' ],
			['MHNT3LL/A']: [ 'iPad Pro 12.9in, 128GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-128gb-silver-wifi-cellular', '$1299' ],
			['MHNW3LL/A']: [ 'iPad Pro 12.9in, 256GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-256gb-space-gray-wifi-cellular', '$1399' ],
			['MHNX3LL/A']: [ 'iPad Pro 12.9in, 256GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-256gb-silver-wifi-cellular', '$1399' ],
			['MHNY3LL/A']: [ 'iPad Pro 12.9in, 512GB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-512gb-space-gray-wifi-cellular', '$1599' ],
			['MHP03LL/A']: [ 'iPad Pro 12.9in, 512GB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-512gb-silver-wifi-cellular', '$1599' ],
			['MHP13LL/A']: [ 'iPad Pro 12.9in, 1TB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-1tb-space-gray-wifi-cellular', '$1999' ],
			['MHP23LL/A']: [ 'iPad Pro 12.9in, 1TB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-1tb-silver-wifi-cellular', '$1999' ],
			['MHP43LL/A']: [ 'iPad Pro 12.9in, 2TB, Wi-Fi/Cellular, Space Gray', 'buy-ipad/ipad-pro/12.9-inch-display-2tb-space-gray-wifi-cellular', '$2399' ],
			['MHP53LL/A']: [ 'iPad Pro 12.9in, 2TB, Wi-Fi/Cellular, Silver', 'buy-ipad/ipad-pro/12.9-inch-display-2tb-silver-wifi-cellular', '$2399' ],
		};
	};
	if ( pickitem === "mac" ) {
		skus = {
			['MGN63LL/A']: [ '13in MB Air, M1, 8/7 Cores, 256GB, Space Gray', 'buy-mac/macbook-air/space-gray-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb', '$999' ],
			['MGN93LL/A']: [ '13in MB Air, M1, 8/7 Cores, 256GB, Gold', 'buy-mac/macbook-air/gold-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb', '$999' ],
			['MGND3LL/A']: [ '13in MB Air, M1, 8/7 Cores, 256GB, Silver', 'buy-mac/macbook-air/silver-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb', '$999' ],
/*			['MGN73LL/A']: [ '13in MB Air, M1, 8/8 Cores, 512GB, Space Gray', 'buy-mac/macbook-air/space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb', '$1249' ],
			['MGNA3LL/A']: [ '13in MB Air, M1, 8/8 Cores, 512GB, Gold', 'buy-mac/macbook-air/gold-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb', '$1249' ],
			['MGNE3LL/A']: [ '13in MB Air, M1, 8/8 Cores, 512GB, Silver', 'buy-mac/macbook-air/silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb', '$1249' ], */
			['---1']: [ '---', '---', '---' ],
			['MNEH3LL/A']: [ '13in MB Pro, 8/10 Cores, M2, 256GB, Space Gray', 'buy-mac/macbook-pro/13-inch-space-gray-apple-m2-chip-with-8-core-cpu-and-10-core-gpu-256gb', '$1299' ],
			['MNEP3LL/A']: [ '13in MB Pro, 8/10 Cores, M2, 256GB, Silver', 'buy-mac/macbook-pro/13-inch-silver-apple-m2-chip-with-8-core-cpu-and-10-core-gpu-256gb', '$1299' ],
			['MNEJ3LL/A']: [ '13in MB Pro, 8/10 Cores, M2, 512GB, Space Gray', 'buy-mac/macbook-pro/13-inch-space-gray-apple-m2-chip-with-8-core-cpu-and-10-core-gpu-512gb', '$1499' ],
			['MNEQ3LL/A']: [ '13in MB Pro, 8/10 Cores, M2, 512GB, Silver', 'buy-mac/macbook-pro/13-inch-silver-apple-m2-chip-with-8-core-cpu-and-10-core-gpu-512gb', '$1499' ],
			['---2']: [ '---', '---', '---' ],
			['MKGR3LL/A']: [ '14in MB Pro, M1 Pro, 8/14 Cores, 512GB/16GB, Silver', 'buy-mac/macbook-pro/14-inch-space-gray-8-core-cpu-14-core-gpu-512gb', '$1999' ],
			['MKGP3LL/A']: [ '14in MB Pro, M1 Pro, 8/14 Cores, 512GB/16GB, Space Gray', 'buy-mac/macbook-pro/14-inch-silver-8-core-cpu-14-core-gpu-512gb', '$1999' ],
			['MKGT3LL/A']: [ '14in MB Pro, M1 Pro, 10/16 Cores, 1TB/16GB, Silver', 'buy-mac/macbook-pro/14-inch-space-gray-10-core-cpu-16-core-gpu-1tb', '$2499' ],
			['MKGQ3LL/A']: [ '14in MB Pro, M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray', 'buy-mac/macbook-pro/14-inch-silver-10-core-cpu-16-core-gpu-1tb', '$2499' ],
			['---3']: [ '---', '---', '---' ],
			['MK1E3LL/A']: [ '16in MB Pro, M1 Pro, 10/16 Cores, 512GB/16GB, Silver', 'buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-16-core-gpu-512gb', '$2499' ],
			['MK183LL/A']: [ '16in MB Pro, M1 Pro, 10/16 Cores, 512GB/16GB, Space Gray', 'buy-mac/macbook-pro/16-inch-silver-10-core-cpu-16-core-gpu-512gb', '$2499' ],
			['MK1F3LL/A']: [ '16in MB Pro, M1 Pro, 10/16 Cores, 1TB/16GB, Silver', 'buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-16-core-gpu-1tb', '$2699' ],
			['MK193LL/A']: [ '16in MB Pro, M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray', 'buy-mac/macbook-pro/16-inch-silver-10-core-cpu-16-core-gpu-1tb', '$2699' ],
			['MK1H3LL/A']: [ '16in MB Pro, M1 Max, 10/32 Cores, 1TB/32GB, Silver', 'buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-32-core-gpu-1tb', '$3499' ],
			['MK1A3LL/A']: [ '16in MB Pro, M1 Max, 10/32 Cores, 1TB/32GB, Space Gray', 'buy-mac/macbook-pro/16-inch-silver-10-core-cpu-32-core-gpu-1tb', '$3499' ],
			['---4']: [ '---', '---', '---' ],
			['MGNR3LL/A']: [ 'Mac Mini, M1, 8/8 Cores, 256GB/8GB', 'buy-mac/mac-mini/apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb', '$699' ],
			['MGNT3LL/A']: [ 'Mac Mini, M1, 8/8 Cores, 512GB/8GB', 'buy-mac/mac-mini/apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb', '$899' ],
			['---5']: [ '---', '---', '---' ],
			['MJMV3LL/A']: [ 'Mac Studio, M1 Max, 10/24 Cores, 512GB/32GB', 'buy-mac/mac-studio/10-core-cpu-24-core-gpu-16-core-neural-engine-32gb-memory-512gb', '$1999' ],
			['MJMW3LL/A']: [ 'Mac Studio, M1 Ultra, 20/48 Cores, 1TB/64GB', 'buy-mac/mac-studio/20-core-cpu-48-core-gpu-32-core-neural-engine-64gb-memory-1tb', '$3999' ],
			['---6']: [ '---', '---', '---' ],
			['MJV93LL/A']: [ '24in iMac, M1, 8/7 Cores, 256GB/8GB, Blue', 'buy-mac/imac/blue-24-inch-8-core-cpu-7-core-gpu-8gb-memory-256gb', '$1299' ],
			['MJV83LL/A']: [ '24in iMac, M1, 8/7 Cores, 256GB/8GB, Green', 'buy-mac/imac/green-24-inch-8-core-cpu-7-core-gpu-8gb-memory-256gb', '$1299' ],
			['MJVA3LL/A']: [ '24in iMac, M1, 8/7 Cores, 256GB/8GB, Pink', 'buy-mac/imac/pink-24-inch-8-core-cpu-7-core-gpu-8gb-memory-256gb', '$1299' ],
			['MGTF3LL/A']: [ '24in iMac, M1, 8/7 Cores, 256GB/8GB, Silver', 'buy-mac/imac/silver-24-inch-8-core-cpu-7-core-gpu-8gb-memory-256gb', '$1299' ],
			['MGPK3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 256GB/8GB, Blue', 'buy-mac/imac/blue-24-inch-8-core-cpu-8-core-gpu-8gb-memory-256gb', '$1499' ],
			['MGPH3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 256GB/8GB, Green', 'buy-mac/imac/green-24-inch-8-core-cpu-8-core-gpu-8gb-memory-256gb', '$1499' ],
			['MGPM3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 256GB/8GB, Pink', 'buy-mac/imac/pink-24-inch-8-core-cpu-8-core-gpu-8gb-memory-256gb', '$1499' ],
			['MGPC3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 256GB/8GB, Silver', 'buy-mac/imac/silver-24-inch-8-core-cpu-8-core-gpu-8gb-memory-256gb', '$1499' ],
			['MGPL3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 512GB/8GB, Blue', 'buy-mac/imac/blue-24-inch-8-core-cpu-8-core-gpu-8gb-memory-512gb', '$1699' ],
			['MGPJ3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 512GB/8GB, Green', 'buy-mac/imac/green-24-inch-8-core-cpu-8-core-gpu-8gb-memory-512gb', '$1699' ],
			['MGPN3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 512GB/8GB, Pink', 'buy-mac/imac/pink-24-inch-8-core-cpu-8-core-gpu-8gb-memory-512gb', '$1699' ],
			['MGPD3LL/A']: [ '24in iMac, M1, 8/8 Cores, USB-3/Eth, 512GB/8GB, Silver', 'buy-mac/imac/silver-24-inch-8-core-cpu-8-core-gpu-8gb-memory-512gb', '$1699' ],
		};
	};
	if ( pickitem === "other" ) {
		skus = {
			['MK0U3LL/A']: [ 'Studio Display, standard, tilt-adjustable', 'buy-mac/mac-studio-display/standard-glass-tilt-adjustable-stand', '$1599' ],
			['MK0Q3LL/A']: [ 'Studio Display, standard, tilt-and height-adjustable', 'buy-mac/mac-studio-display/standard-glass-tilt-and-height-adjustable-stand', '$1999' ],
			['MMYQ3LL/A']: [ 'Studio Display, standard, VESA mount adapter', 'buy-mac/mac-studio-display/standard-glass-vesa-mount-adapter', '$1599' ],
			['MMYW3LL/A']: [ 'Studio Display, nano-texture, tilt-adjustable', 'buy-mac/mac-studio-display/nano-texture-glass-tilt-adjustable-stand', '$1899' ],
			['MMYV3LL/A']: [ 'Studio Display, nano-texture, tilt-and height-adjustable', 'buy-mac/mac-studio-display/nano-texture-glass-tilt-and-height-adjustable-stand', '$2299' ],
			['MMYX3LL/A']: [ 'Studio Display, nano-texture, VESA mount adapter', 'buy-mac/mac-studio-display/nano-texture-glass-vesa-mount-adapter', '$1899' ],
			['---1']: [ '---', '---', '---' ],
			['MV7N2AM/A']: [ 'AirPods 2nd Gen', 'product/MV7N2AM/A/airpods-with-charging-case', '$129' ],
			['MME73AM/A']: [ 'AirPods 3rd Gen', 'product/MME73AM/A/airpods-3rd-generation', '$179' ],
			['MLWK3AM/A']: [ 'AirPods Pro', 'product/MLWK3AM/A/airpods-pro', '$249' ],
			['---2']: [ '---', '---', '---' ],
			['MX532AM/A']: [ 'AirTag, 1/pk', 'buy-airtag/airtag/1-pack', '$29' ],
			['MX542AM/A']: [ 'AirTag, 4/pk', 'buy-airtag/airtag/4-pack', '$99' ],
			['---3']: [ '---', '---', '---' ],
			['MK0C2AM/A']: [ 'Pencil, 1st Gen', 'product/MK0C2AM/A/apple-pencil-1st-generation', '$99' ],
			['MU8F2AM/A']: [ 'Pencil, 2nd Gen', 'product/MU8F2AM/A/apple-pencil-2nd-generation', '$129' ],
			['---4']: [ '---', '---', '---' ],
			['MHXH3AM/A']: [ 'MagSafe Charger, 1m', 'product/MHXH3AM/A/magsafe-charger', '$39' ],
			['MJWY3AM/A']: [ 'MagSafe Battery Pack', 'product/MJWY3AM/A/magsafe-battery-pack', '$99' ],
			['MMX62AM/A']: [ 'Lightning to 3.5mm Jack Adapter', 'product/MMX62AM/A/lightning-to-35-mm-headphone-jack-adapter', '$9' ],
			['MHJA3AM/A']: [ '20W USB-C Power Adapter', 'product/MHJA3AM/A/20w-usb-c-power-adapter', '$19' ],
			['MY1W2AM/A']: [ '30W USB-C Power Adapter', 'product/MY1W2AM/A/30w-usb-c-power-adapter', '$49' ],
			['MNWM3AM/A']: [ '35W Dual USB-C Compact Power Adapter', 'product/MNWM3AM/A/35w-dual-usb-c-port-compact-power-adapter', '$59' ],
			['MNWP3AM/A']: [ '35W Dual USB-C Power Adapter', 'product/MNWP3AM/A/35w-dual-usb-c-port-power-adapter', '$59' ],
			['MKU63AM/A']: [ '67W USB-C Power Adapter', 'product/MKU63AM/A/67w-usb-c-power-adapter', '$59' ],
			['MX0J2AM/A']: [ '96W USB-C Power Adapter', 'product/MX0J2AM/A/96w-usb-c-power-adapter', '$79' ],
			['MLYU3AM/A']: [ '140W USB-C Power Adapter', 'product/MLYU3AM/A/140w-usb-c-power-adapter', '$99' ], 
			['MLYV3AM/A']: [ 'USB-C to MagSafe 3 Cable, 2m', 'product/MLYV3AM/A/usb-c-to-magsafe-3-cable-2-m', '$49' ],
			['MM0A3AM/A']: [ 'USB-C to Lightning Cable, 1m', 'product/MM0A3AM/A/usb-c-to-lightning-cable-1-m', '$19' ],
			['MQGH2AM/A']: [ 'USB-C to Lightning Cable, 2m', 'product/MQGH2AM/A/usb-c-to-lightning-cable-2-m', '$29' ],
			['MXLY2AM/A']: [ 'Lightning to USB Cable, 1m', 'product/MXLY2AM/A/lightning-to-usb-cable-1-m', '$19' ],
			['MD819AM/A']: [ 'Lightning to USB Cable, 2m', 'product/MD819AM/A/lightning-to-usb-cable-2-m', '$29' ],
			['MM093AM/A']: [ 'USB-C Cable, 1m', 'product/MM093AM/A/usb-c-charge-cable-1-m', '$19' ],
			['MLL82AM/A']: [ 'USB-C Cable, 2m', 'product/MLL82AM/A/usb-c-charge-cable-2-m', '$19' ],
		};
	};
	
	return skus;
};
