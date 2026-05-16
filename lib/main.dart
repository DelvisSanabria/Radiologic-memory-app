import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'theme/app_theme.dart';
import 'screens/welcome_screen.dart';
import 'screens/radiograph_upload_screen.dart';
import 'screens/interactive_viewer_screen.dart';
import 'screens/diagnosis_response_screen.dart';
import 'screens/search_projections_screen.dart';
import 'screens/projections_library_screen.dart';
import 'screens/edit_tech_details_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ),
  );
  runApp(const RadioLearnApp());
}

class RadioLearnApp extends StatelessWidget {
  const RadioLearnApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RadioLearn',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      initialRoute: '/',
      routes: {
        '/': (context) => const WelcomeScreen(),
        '/upload': (context) => const RadiographUploadScreen(),
        '/viewer': (context) => const InteractiveViewerScreen(),
        '/diagnosis': (context) => const DiagnosisResponseScreen(),
        '/search': (context) => const SearchProjectionsScreen(),
        '/library': (context) => const ProjectionsLibraryScreen(),
        '/edit-details': (context) => const EditTechDetailsScreen(),
      },
    );
  }
}
