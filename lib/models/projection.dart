class Projection {
  final String id;
  final String name;
  final String category;
  final String description;
  final List<String> instructions;
  final String tipsForSuccess;
  final String radiologicalSigns;
  final String anatomyPresent;
  final String? imageUrl;

  const Projection({
    required this.id,
    required this.name,
    required this.category,
    required this.description,
    required this.instructions,
    required this.tipsForSuccess,
    required this.radiologicalSigns,
    required this.anatomyPresent,
    this.imageUrl,
  });
}

class RadiographCase {
  final String id;
  final String caseNumber;
  final String title;
  final String category;
  final String? imageUrl;
  final String? diagnosis;
  final List<String> findings;

  const RadiographCase({
    required this.id,
    required this.caseNumber,
    required this.title,
    required this.category,
    this.imageUrl,
    this.diagnosis,
    this.findings = const [],
  });
}
