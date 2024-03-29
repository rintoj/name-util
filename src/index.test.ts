import * as nameUtil from './index'

describe('util-name', function () {
  describe('toDashedName', function () {
    test('should convert "happyBirthday-to-You" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('happyBirthday-to-You')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthday-to-You----" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthday-to-You----')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthday_to-You----" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthday_to-You----')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthday_to-You -" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthday_to-You -')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthday_to-You_" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthday_to-You_')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthdayToYou " to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthdayToYou ')).toEqual('happy-birthday-to-you')
    })

    test('should convert "happy Birthday   to You " to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('happy Birthday   to You ')).toEqual('happy-birthday-to-you')
    })

    test('should convert "  happy birthday to you   " to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('  happy birthday to you   ')).toEqual('happy-birthday-to-you')
    })

    test('should convert "HappyBirthdayToYou" to "happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('HappyBirthdayToYou')).toEqual('happy-birthday-to-you')
    })

    test('should convert "$HappyBirthdayToYou" to "$-happy-birthday-to-you"', function () {
      expect(nameUtil.toDashedName('$HappyBirthdayToYou')).toEqual('$-happy-birthday-to-you')
    })

    test('should convert "Create  Lease -workflow-items" to "create-lease-workflow-items"', function () {
      expect(nameUtil.toDashedName('Create  Lease -workflow-items')).toEqual(
        'create-lease-workflow-items',
      )
    })

    test('should convert "abcd 123 123" to "abcd-123-123"', function () {
      expect(nameUtil.toDashedName('abcd 123 123')).toEqual('abcd-123-123')
    })

    test('should convert "abcd asdf123413 123123" to "abcd-asdf123413-123123"', function () {
      expect(nameUtil.toDashedName('abcd asdf123413 123123')).toEqual('abcd-asdf123413-123123')
    })

    test('should convert "12323 abcd asd 123 123 123" to "12323-abcd-asd-123-123-123"', function () {
      expect(nameUtil.toDashedName('12323 abcd asd 123 123 123')).toEqual(
        '12323-abcd-asd-123-123-123',
      )
    })
  })

  describe('toUnderscoredName', function () {
    test('should convert "happyBirthday-to-You" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('happyBirthday-to-You')).toEqual('happy_birthday_to_you')
    })

    test('should convert "HappyBirthday-to-You----" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthday-to-You----')).toEqual(
        'happy_birthday_to_you',
      )
    })

    test('should convert "HappyBirthday_to-You----" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthday_to-You----')).toEqual(
        'happy_birthday_to_you',
      )
    })

    test('should convert "HappyBirthday_to-You -" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthday_to-You -')).toEqual('happy_birthday_to_you')
    })

    test('should convert "HappyBirthday_to-You_" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthday_to-You_')).toEqual('happy_birthday_to_you')
    })

    test('should convert "HappyBirthdayToYou " to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthdayToYou ')).toEqual('happy_birthday_to_you')
    })

    test('should convert "happy Birthday   to You " to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('happy Birthday   to You ')).toEqual(
        'happy_birthday_to_you',
      )
    })

    test('should convert "  happy birthday to you   " to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('  happy birthday to you   ')).toEqual(
        'happy_birthday_to_you',
      )
    })

    test('should convert "HappyBirthdayToYou" to "happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('HappyBirthdayToYou')).toEqual('happy_birthday_to_you')
    })

    test('should convert "$HappyBirthdayToYou" to "$_happy_birthday_to_you"', function () {
      expect(nameUtil.toUnderscoredName('$HappyBirthdayToYou')).toEqual('$_happy_birthday_to_you')
    })
  })

  describe('toCamelCase', function () {
    test('should convert "happyBirthday-to-You" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('happyBirthday-to-You')).toEqual('happyBirthdayToYou')
    })

    test('should convert "HappyBirthday-to-You----" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('HappyBirthday-to-You----')).toEqual('happyBirthdayToYou')
    })

    test('should convert "HappyBirthday_to-You----" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('HappyBirthday_to-You----')).toEqual('happyBirthdayToYou')
    })

    test('should convert "HappyBirthday_to-You -" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('HappyBirthday_to-You -')).toEqual('happyBirthdayToYou')
    })

    test('should convert "HappyBirthday_to-You_" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('HappyBirthday_to-You_')).toEqual('happyBirthdayToYou')
    })

    test('should convert "HappyBirthdayToYou " to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('HappyBirthdayToYou ')).toEqual('happyBirthdayToYou')
    })

    test('should convert "happy Birthday   to You " to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('happy Birthday   to You ')).toEqual('happyBirthdayToYou')
    })

    test('should convert "  happy birthday to you   " to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('  happy birthday to you   ')).toEqual('happyBirthdayToYou')
    })

    test('should convert "$happyBirthdayToYou" to "happyBirthdayToYou"', function () {
      expect(nameUtil.toCamelCase('$happyBirthdayToYou')).toEqual('$happyBirthdayToYou')
    })

    test('should convert "Create  Lease -workflow-items" to "createLeaseWorkflowItems"', function () {
      expect(nameUtil.toCamelCase('Create  Lease -workflow-items')).toEqual(
        'createLeaseWorkflowItems',
      )
    })

    test('should convert "abcd 123 123" to "abcd123123"', function () {
      expect(nameUtil.toCamelCase('abcd 123 123')).toEqual('abcd123123')
    })

    test('should convert "abcd asdf123413 123123" to "abcdAsdf123413123123"', function () {
      expect(nameUtil.toCamelCase('abcd asdf123413 123123')).toEqual('abcdAsdf123413123123')
    })

    test('should convert "12323 abcd asd 123 123 123" to "abcdAsd123123123"', function () {
      expect(nameUtil.toCamelCase('12323 abcd asd 123 123 123')).toEqual('abcdAsd123123123')
    })
  })

  describe('toClassName', function () {
    test('should convert "happyBirthday-to-You" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('happyBirthday-to-You')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthday-to-You----" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthday-to-You----')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthday_to-You----" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthday_to-You----')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthday_to-You -" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthday_to-You -')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "_HappyBirthday_to-You_" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('_HappyBirthday_to-You_')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthdayToYou " to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthdayToYou ')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "happy Birthday   to You " to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('happy Birthday   to You ')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "  happy birthday to you   " to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('  happy birthday to you   ')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthdayToYo" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthdayToYou')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('HappyBirthdayToYou')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.toClassName('page 1')).toEqual('Page1')
    })

    test('should convert "Create  Lease -workflow-items" to "createLeaseWorkflowItems"', function () {
      expect(nameUtil.toClassName('Create  Lease -workflow-items')).toEqual(
        'CreateLeaseWorkflowItems',
      )
    })

    test('should convert "abcd 123 123" to "abcd123123"', function () {
      expect(nameUtil.toClassName('abcd 123 123')).toEqual('Abcd123123')
    })

    test('should convert "abcd asdf123413 123123" to "abcdAsdf123413123123"', function () {
      expect(nameUtil.toClassName('abcd asdf123413 123123')).toEqual('AbcdAsdf123413123123')
    })

    test('should convert "12323 abcd asd 123 123 123" to "abcdAsd123123123"', function () {
      expect(nameUtil.toClassName('12323 abcd asd 123 123 123')).toEqual('AbcdAsd123123123')
    })
  })

  describe('capitalize', function () {
    test('should convert "happyBirthday-to-You" to "HappyBirthday-to-You"', function () {
      expect(nameUtil.capitalize('happyBirthday-to-You')).toEqual('HappyBirthday-to-You')
    })

    test('should convert "  happyBirthday-to-You" to "HappyBirthday-to-You"', function () {
      expect(nameUtil.capitalize('  happyBirthday-to-You')).toEqual('HappyBirthday-to-You')
    })

    test('should convert "HappyBirthday-to-You" to "HappyBirthday-to-You"', function () {
      expect(nameUtil.capitalize('HappyBirthday-to-You----')).toEqual('HappyBirthday-to-You----')
    })

    test('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function () {
      expect(nameUtil.capitalize('HappyBirthdayToYou')).toEqual('HappyBirthdayToYou')
    })

    test('should convert "$happyBirthdayToYou" to "$happyBirthdayToYou"', function () {
      expect(nameUtil.capitalize('$happyBirthdayToYou')).toEqual('$happyBirthdayToYou')
    })
  })

  describe('capitalizeWords', function () {
    test('should convert "happyBirthday-to-You" to "Happy Birthday To You"', function () {
      expect(nameUtil.capitalizeWords('happyBirthday-to-You')).toEqual('Happy Birthday To You')
    })

    test('should convert "  happyBirthday-to-You" to "Happy Birthday To You"', function () {
      expect(nameUtil.capitalizeWords('  happyBirthday-to-You')).toEqual('Happy Birthday To You')
    })

    test('should convert "HappyBirthday-to-You" to "Happy Birthday To You"', function () {
      expect(nameUtil.capitalizeWords('HappyBirthday-to-You----')).toEqual('Happy Birthday To You')
    })

    test('should convert "HappyBirthdayToYou" to "Happy Birthday To You"', function () {
      expect(nameUtil.capitalizeWords('HappyBirthdayToYou')).toEqual('Happy Birthday To You')
    })

    test('should convert "$happyBirthdayToYou" to "$happy Birthday To You"', function () {
      expect(nameUtil.capitalizeWords('$happyBirthdayToYou')).toEqual('$happy Birthday To You')
    })
  })

  describe('nextName', function () {
    test('should return the next name', function () {
      expect(nameUtil.nextName(['page1', 'page2'], 'page')).toEqual('page3')
    })

    test('should return the next name', function () {
      expect(nameUtil.nextName(['page1', 'page2'], 'other')).toEqual('other1')
    })

    test('should return the next name', function () {
      expect(nameUtil.nextName([], 'page')).toEqual('page1')
    })

    test('should return the next name', function () {
      expect(nameUtil.nextName(['Page1Component', 'Page2Component'], 'Page')).toEqual('Page3')
    })
  })
})
