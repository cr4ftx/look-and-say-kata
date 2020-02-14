const getLookAndSayNextLine = require('./index');

describe('getLookAndSayNextLine', () => {
  it('should convert 1 to 11', () => {
    expect(getLookAndSayNextLine('1')).toBe('11');
  });

  it('should convert 2 to 12', () => {
    expect(getLookAndSayNextLine('2')).toBe('12');
  });

  it('should convert 3 to 13', () => {
    expect(getLookAndSayNextLine('3')).toBe('13');
  });

  it('should convert 10 to 1110', () => {
    expect(getLookAndSayNextLine('10')).toBe('1110');
  });

  it('should convert 11 to 21', () => {
    expect(getLookAndSayNextLine('11')).toBe('21');
  });

  it('should convert 12 to 1112', () => {
    expect(getLookAndSayNextLine('12')).toBe('1112');
  });

  it('should convert 21 to 1211', () => {
    expect(getLookAndSayNextLine('21')).toBe('1211');
  });

  it('should convert 22 to 22', () => {
    expect(getLookAndSayNextLine('22')).toBe('22');
  });

  it('should convert 23 to 1213', () => {
    expect(getLookAndSayNextLine('23')).toBe('1213');
  });

  it('should convert 24 to 1214', () => {
    expect(getLookAndSayNextLine('24')).toBe('1214');
  });

  it('should convert 100 to 1120', () => {
    expect(getLookAndSayNextLine('100')).toBe('1120');
  });

  it('should convert 101 to 111011', () => {
    expect(getLookAndSayNextLine('101')).toBe('111011');
  });

  it('should convert 102 to 111012', () => {
    expect(getLookAndSayNextLine('102')).toBe('111012');
  });

  it('should convert 112 to 2112', () => {
    expect(getLookAndSayNextLine('112')).toBe('2112');
  });

  it('should convert 111 to 31', () => {
    expect(getLookAndSayNextLine('111')).toBe('31');
  });

  it('should convert 122 to 1122', () => {
    expect(getLookAndSayNextLine('122')).toBe('1122');
  });

  it('should convert 11220 to 212210', () => {
    expect(getLookAndSayNextLine('11220')).toBe('212210');
  });
});
