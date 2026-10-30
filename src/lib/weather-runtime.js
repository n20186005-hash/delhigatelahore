const TTL=900000;
const number=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
const validCode=v=>Number.isInteger(v)&&[0,1,2,3,45,48,51,53,55,56,57,61,63,65,66,67,71,73,75,77,80,81,82,85,86,95,96,99].includes(v);
export function valid(payload,air=false,now=Date.now()) {
 if(payload?.timezone!=='Asia/Karachi'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(payload?.current?.time??''))return false;
 const c=payload.current,at=Date.parse(c.time+'+05:00');
 if(!Number.isFinite(at)||now-at>4*3600000||at-now>3600000)return false;
 if(air)return ['us_aqi','pm2_5','pm10'].every(k=>number(c[k],0,100000));
 if(!number(c.temperature_2m,-90,65)||!number(c.relative_humidity_2m,0,100)||!number(c.apparent_temperature,-110,85)||!number(c.precipitation,0,1000)||!number(c.wind_speed_10m,0,500)||!validCode(c.weather_code))return false;
 const d=payload.daily,today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Karachi',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
 if(!d||!Array.isArray(d.time)||d.time.length!==7||d.time[0]!==today)return false;
 return d.time.every((day,i)=>{const expected=new Date(Date.parse(today+'T00:00:00Z')+i*86400000).toISOString().slice(0,10);return day===expected&&validCode(d.weather_code?.[i])&&number(d.temperature_2m_max?.[i],-90,65)&&number(d.temperature_2m_min?.[i],-90,65)&&d.temperature_2m_max[i]>=d.temperature_2m_min[i]&&number(d.precipitation_probability_max?.[i],0,100);});
}
export function startWeather(){
 const panel=document.querySelector('[data-weather]');if(!panel)return;
 try{for(const lang of ['ur','en'])localStorage.removeItem('delhi-gate-weather-'+lang);}catch{}
 const l=JSON.parse(panel.dataset.config),ur=l.lang==='ur',current=document.getElementById('weather-current'),days=document.getElementById('weather-days'),air=document.getElementById('weather-air');
 const unavailable=()=>{current.textContent=ur?'تازہ موسم دستیاب نہیں۔':'Fresh weather is unavailable.';days.replaceChildren();air.textContent=ur?'تازہ فضائی معیار دستیاب نہیں۔':'Fresh air-quality data is unavailable.';};
 const base='latitude='+l.latitude+'&longitude='+l.longitude+'&timezone=Asia%2FKarachi';
 const urls=['https://api.open-meteo.com/v1/forecast?'+base+'&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=7','https://air-quality-api.open-meteo.com/v1/air-quality?'+base+'&current=us_aqi,pm2_5,pm10'];
 let busy=false,expiry=0;
 async function refresh(){if(busy)return;busy=true;clearTimeout(expiry);unavailable();const retrieved=Date.now();
 await Promise.allSettled(urls.map(async(url,i)=>{const response=await fetch(url,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error('Unavailable');const p=await response.json();if(!valid(p,!!i))throw Error('Invalid model');const c=p.current,stamp=(ur?'ماڈل: ':'Model: ')+c.time+' · '+(ur?'حاصل کردہ: ':'Retrieved: ')+new Intl.DateTimeFormat(ur?'ur-PK':'en-GB',{timeZone:'Asia/Karachi',dateStyle:'short',timeStyle:'short'}).format(new Date(retrieved));
 if(i){const level=l.levels.find(x=>c.us_aqi<=x[0])??l.levels.at(-1);air.textContent='US AQI '+c.us_aqi+' · '+level[1]+' · PM2.5 '+c.pm2_5+' µg/m³ · PM10 '+c.pm10+' µg/m³ · '+stamp;}
 else {current.textContent=l.codes[c.weather_code]+' · '+c.temperature_2m+' °C · '+(ur?'محسوس: ':'Feels like: ')+c.apparent_temperature+' °C · '+(ur?'نمی: ':'Humidity: ')+c.relative_humidity_2m+'% · '+(ur?'ہوا: ':'Wind: ')+c.wind_speed_10m+' km/h · '+(ur?'ماڈل بارش: ':'Model precipitation: ')+c.precipitation+' mm · '+stamp;
 p.daily.time.forEach((date,j)=>{const li=document.createElement('li');li.textContent=date+' · '+l.codes[p.daily.weather_code[j]]+' · '+p.daily.temperature_2m_min[j]+' / '+p.daily.temperature_2m_max[j]+' °C · '+(ur?'بارش کا امکان: ':'Rain chance: ')+p.daily.precipitation_probability_max[j]+'%';days.append(li);});}
 }));busy=false;expiry=setTimeout(()=>{unavailable();if(!document.hidden)refresh();},TTL);}
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});refresh();
}
