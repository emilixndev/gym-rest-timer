import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
          gap: 32,
        }}
      >
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 20,
            padding: 32,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 16,
            elevation: 12,
          }}
        >
          <Text
            style={{
              fontSize: 72,
              textAlign: 'center',
              fontWeight: 'bold',
              color: colors.text,
              letterSpacing: 2,
            }}
          >
            00:00
          </Text>
        </View>

        <View style={{ gap: 16, width: '100%', maxWidth: 320 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: colors.textSecondary,
              fontWeight: '600',
            }}
          >
            Default time
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: colors.surface,
              borderWidth: 2,
              borderColor: colors.border,
              borderRadius: 12,
              padding: 18,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: '600',
              }}
            >
              01:15 ▼
            </Text>
          </TouchableOpacity>

          <View style={{ gap: 16, width: '100%', maxWidth: 320 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.success,
                height: 60,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {'▶️ START'}
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.secondary,
                    height: 50,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {'🔄 RESET'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.secondary,
                    height: 50,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {'⏹️ STOP'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.warning,
                    height: 50,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {'-15s'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.warning,
                    height: 50,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {'+15s'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const colors = {
  background: '#121212',
  surface: '#1E1E1E',
  primary: '#BB86FC',
  secondary: '#03DAC6',
  accent: '#FF6B6B',
  text: '#FFFFFF',
  textSecondary: '#B3B3B3',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};
