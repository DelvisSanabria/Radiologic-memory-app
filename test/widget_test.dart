import 'package:flutter_test/flutter_test.dart';
import 'package:radiolearn_app/main.dart';

void main() {
  testWidgets('App loads welcome screen', (WidgetTester tester) async {
    await tester.pumpWidget(const RadioLearnApp());
    expect(find.text('RadioLearn'), findsOneWidget);
    expect(find.text('Get Started'), findsOneWidget);
  });
}
