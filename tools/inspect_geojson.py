#!/usr/bin/env python3
import json, re, sys
from pathlib import Path
p = Path('assets/provinces.geojson')
if not p.exists():
    print('ERROR: assets/provinces.geojson not found')
    sys.exit(2)
geo = json.loads(p.read_text())
feats = geo.get('features', [])
print('total features:', len(feats))
water_regex = re.compile(r"(meer|zee|wad|water|waters|wadden|ooster|wester|estuari|IJsselmeer|Markermeer|Waddenzee|Oosterschelde|Westerschelde)", re.I)
count=0
for i, f in enumerate(feats):
    props = f.get('properties') or {}
    geom = f.get('geometry') or {}
    name_candidates = []
    for k in ['NAME','name','name_en','NAME_1','NAME_0','WATERNAME','water','label','display_name']:
        v = props.get(k)
        if isinstance(v, str) and v.strip():
            name_candidates.append((k, v.strip()))
    # if no name in keys, maybe id
    if not name_candidates:
        if f.get('id'): name_candidates.append(('id', str(f.get('id'))))
    # flatten for detection
    all_names = ' '.join(v for k,v in name_candidates)
    prop_keys = ','.join(sorted(props.keys()))
    prop_vals = ' '.join(str(v) for v in props.values() if isinstance(v, str))
    prop_hint = False
    # property-based hints
    if props.get('natural')=='water' or props.get('landuse')=='water' or props.get('water'):
        prop_hint = True
    if any(re.search(r'water|lake|sea|wad|meer|estuari|oester|zee', (str(props.get(k) or '')).lower()) for k in ['fclass','type','kind','featurecla','FUNCTION']):
        prop_hint = True
    name_match = bool(water_regex.search(all_names))
    if name_match or prop_hint:
        count += 1
        print(f'[{i}] geom={geom.get("type")} names={name_candidates[:3]} keysCount={len(props)} keysSample={prop_keys[:180]}')
        if geom.get('type') in ('Polygon','MultiPolygon'):
            coords = geom.get('coordinates')
            if coords and len(coords):
                # print centroid-ish sample coordinate
                try:
                    c0 = coords[0][0][0]
                    print('   sample coord:', c0)
                except Exception:
                    pass
        if count>=100:
            break
print('detected water-like features:', count)
sys.exit(0)
