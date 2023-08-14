const fragmentShader = /*glsl*/ `
  precision lowp float;
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  #define SMOOTH(r,R) (1.0-smoothstep(R-.001,R+.001, r))
  #define RANGE(a,b,x) (step(a,x)*(1.0-step(b,x)))
  #define RS(a,b,x) (smoothstep(a-1.0,a+1.0,x)*(1.0-smoothstep(b-1.0,b+1.0,x)))
  #define M_PI 3.1415926535897932384626433832795

  #define blue1 vec3(0.74,0.95,1.00)
  #define blue2 vec3(0.87,0.98,1.00)
  #define blue3 vec3(0.35,0.76,0.83)
  #define blue4 vec3(0.953,0.969,0.89)
  #define red   vec3(1.00,0.38,0.227)
  #define green   vec3(.5,0.99,0.)

  vec2 MOV(float a, float b, float c, float d, float t) {
    return vec2(
      a * cos(t) + b * cos(0.1 * t), 
      c * sin(t) + d * cos(0.1 * t)
    );
  }

  float movingLine(vec2 uv, vec2 center, float radius)
  {
      //angle of the line
      float theta0 = 90.0 * uTime;
      vec2 d = uv - center;
      float r = sqrt( dot( d, d ) );
      if(r<radius)
      {
          //compute the distance to the line theta=theta0
          vec2 p = radius*vec2(cos(theta0*M_PI/180.0),
                              -sin(theta0*M_PI/180.0));
          float l = length( d - p*clamp( dot(d,p)/dot(p,p), 0.0, 1.0) );
        d = normalize(d);
          //compute gradient based on angle difference to theta0
        float theta = mod(180.0*atan(d.y,d.x)/M_PI+theta0,360.0);
          float gradient = clamp(1.0-theta/90.0,0.0,1.0);
          return SMOOTH(l,1.0)+0.5*gradient;
      }
      else return 0.0;
  }

  float circle(vec2 uv, vec2 center, float radius, float width)
  {
      float r = length(uv - center);
      return SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius);
  }

  float circle2(vec2 uv, vec2 center, float radius, float width, float opening)
  {
      vec2 d = uv - center;
      float r = sqrt( dot( d, d ) );
      d = normalize(d);
      if( abs(d.y) > opening )
        return SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius);
      else
          return 0.0;
  }

  float circle3(vec2 uv, vec2 center, float radius, float width)
  {
      vec2 d = uv - center;
      float r = sqrt( dot( d, d ) );
      d = normalize(d);
      float theta = 180.0*(atan(d.y,d.x)/M_PI);
      return smoothstep(2.0, 2.1, abs(mod(theta+2.0,45.0)-2.0)) *
          mix( 0.5, 1.0, step(45.0, abs(mod(theta, 180.0)-90.0)) ) *
          (SMOOTH(r-width/2.0,radius)-SMOOTH(r+width/2.0,radius));
  }

  float triangles(vec2 uv, vec2 center, float radius)
  {
      vec2 d = uv - center;
      return RS(-8.0, 0.0, d.x-radius) * (1.0-smoothstep( 7.0+d.x-radius,9.0+d.x-radius, abs(d.y)))
          + RS( 0.0, 8.0, d.x+radius) * (1.0-smoothstep( 7.0-d.x-radius,9.0-d.x-radius, abs(d.y)))
          + RS(-8.0, 0.0, d.y-radius) * (1.0-smoothstep( 7.0+d.y-radius,9.0+d.y-radius, abs(d.x)))
          + RS( 0.0, 8.0, d.y+radius) * (1.0-smoothstep( 7.0-d.y-radius,9.0-d.y-radius, abs(d.x)));
  }

  float CROSS(vec2 uv, vec2 center, float radius, float width)
  {
      vec2 d = uv - center;
      float x = d.x;
      float y = d.y;
      float r = sqrt( dot( d, d ) );
      if( (r<radius) && ( (x<=y+width && x>=y-width) || (x<=-y+width && x>=-y-width) ) )
          return 1.0;
      else return 0.0;
  }
  float dots(vec2 uv, vec2 center, float radius)
  {
      vec2 d = uv - center;
      float r = sqrt( dot( d, d ) );
      if( r <= 2.5 )
          return 1.0;
      if( ( r<= radius) && ( (abs(d.y+0.5)<=1.0) && ( mod(d.x+1.0, 50.0) < 2.0 ) ) )
          return 1.0;
      else if ( (abs(d.y+0.5)<=1.0) && ( r >= 50.0 ) && ( r < 115.0 ) )
          return 0.5;
      else
        return 0.0;
  }
  float bip1(vec2 uv, vec2 center)
  {
      // float r = length(uv - center);
      // float R = 8.+mod(87.0*uTime, 80.0);
      // return (0.5-0.5*cos(30.0*uTime)) * SMOOTH(r,3.0) + SMOOTH(4.0,r) - SMOOTH(6.0,r);
      return SMOOTH(length(uv - center), .003);
  }
  float bip2(vec2 uv, vec2 center, float radius, float dis)
  {
      float r = length(uv - center);
      float R = radius+mod(8.0*uTime, .008);
      return 
          (0.5-0.5*cos(30.0*uTime)) * SMOOTH(r,.001)
          + SMOOTH(.002,r) - SMOOTH(.004,r);
          // + smoothstep(max(.004,R-dis),R,r)-SMOOTH(R,r);
  }

  void main() {
    vec3 finalColor = vec3(0.);
    vec2 uv = vUv;
    vec2 c = vec2(0.5);
    finalColor += circle(uv, c, .2, .002) * blue1;
    finalColor += circle(uv, c, .1, .0004) * blue1;
    finalColor += vec3(0.3*CROSS(uv, c, .2, .0006));
    finalColor += movingLine(uv, c, .1998) * blue3;
    finalColor += circle(uv, c, .005, .0004) * blue3;
    if(length(uv-c) < 240.0) {
      // 搞点随机移动的目标点
      vec2 p = .05*MOV(1.3,1.0,1.0,1.4,3.0+0.1*uTime);
      finalColor += bip1(uv, c+p) * vec3(1,1,1);
      p = .05*MOV(0.9,-1.1,1.7,0.8,-2.0+sin(0.1*uTime)+0.15*uTime);
      finalColor += bip1(uv, c+p) * vec3(1,1,1);
      p = .05*MOV(1.54,1.7,1.37,1.8,sin(0.1*uTime+7.0)+0.2*uTime);
      finalColor += bip2(uv,c+p,.008,.002) * green;
      finalColor += bip2(uv,c,.2,.008) * red;
    }

    gl_FragColor = vec4( finalColor, 1.0 );
  }
`

export default fragmentShader
